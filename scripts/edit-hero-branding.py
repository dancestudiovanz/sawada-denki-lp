"""ヒーロー画像：作業服をこげ茶色にし、サワダ電気ロゴ・社名を合成する。"""
from __future__ import annotations

import colorsys
import shutil
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1] / "src" / "assets" / "images"
HERO = ROOT / "hero_electrician_1779273052158.png"
LOGO = ROOT / "logo-sawada-denki.png"
BACKUP = ROOT / "hero_electrician_1779273052158.original.png"

REF_W, REF_H = 1408, 768


def recolor_uniform(img: Image.Image) -> Image.Image:
    arr = np.array(img.convert("RGB"), dtype=np.float32)
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    h, w = arr.shape[0], arr.shape[1]

    max_rgb = np.maximum(np.maximum(r, g), b)
    min_rgb = np.minimum(np.minimum(r, g), b)
    delta = max_rgb - min_rgb
    # 簡易HSV Hue
    hue = np.zeros_like(r)
    mask_d = delta > 1e-3
    rr = np.zeros_like(r)
    gg = np.zeros_like(g)
    bb = np.zeros_like(b)
    rr[mask_d] = ((r - min_rgb) / delta)[mask_d]
    gg[mask_d] = ((g - min_rgb) / delta)[mask_d]
    bb[mask_d] = ((b - min_rgb) / delta)[mask_d]
    hue = np.where((max_rgb == r) & mask_d, (60 * ((g - b) / delta) + 360) % 360, hue)
    hue = np.where((max_rgb == g) & mask_d, 60 * ((b - r) / delta) + 120, hue)
    hue = np.where((max_rgb == b) & mask_d, 60 * ((r - g) / delta) + 240, hue)
    sat = np.where(max_rgb > 0, delta / max_rgb, 0)
    val = max_rgb / 255.0

    y_idx = np.arange(h)[:, None]
    x_idx = np.arange(w)[None, :]
    worker = (x_idx < w * 0.62) & (y_idx > h * 0.22)

    is_blue_uniform = (
        worker
        & (((hue >= 170) & (hue <= 260)) | ((hue >= 200) & (hue <= 280)))
        & (sat > 0.08)
        & (val < 0.75)
    )
    is_dark = worker & (val < 0.42) & (max_rgb < 115) & (sat < 0.65)
    is_skin = (r > 120) & (g > 82) & (b > 62) & (r > g) & (g > b * 0.58)
    is_white = (r > 198) & (g > 198) & (b > 198)
    is_orange = (r > 160) & (g > 60) & (b < 115) & (r > b + 30)

    mask = (is_blue_uniform | is_dark) & ~is_skin & ~is_white & ~is_orange

    # こげ茶（明度を維持）
    lum = np.clip(val, 0.08, 0.9)
    brown_r = 38 + lum * 42
    brown_g = 26 + lum * 30
    brown_b = 18 + lum * 24

    out = arr.copy()
    out[:, :, 0] = np.where(mask, brown_r, r)
    out[:, :, 1] = np.where(mask, brown_g, g)
    out[:, :, 2] = np.where(mask, brown_b, b)
    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8))


def get_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for path in (
        "C:/Windows/Fonts/meiryob.ttc",
        "C:/Windows/Fonts/meiryo.ttc",
        "C:/Windows/Fonts/msgothic.ttc",
    ):
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def scale_box(box: tuple[int, int, int, int], w: int, h: int) -> tuple[int, int, int, int]:
    sx, sy = w / REF_W, h / REF_H
    return (int(box[0] * sx), int(box[1] * sy), int(box[2] * sx), int(box[3] * sy))


def logo_icon() -> Image.Image:
    full = Image.open(LOGO).convert("RGBA")
    lw, lh = full.size
    return full.crop((0, 0, lw, int(lh * 0.52)))


def cover(img: Image.Image, box: tuple[int, int, int, int], color: tuple[int, int, int]) -> None:
    x1, y1, x2, y2 = box
    img.paste(Image.new("RGB", (x2 - x1, y2 - y1), color), (x1, y1))


def paste_icon(img: Image.Image, icon: Image.Image, x: int, y: int, size: int) -> None:
    r = icon.resize((size, size), Image.Resampling.LANCZOS)
    img.paste(r, (x, y), r)


def draw_label(
    img: Image.Image, x: int, y: int, size: int, stroke: tuple[int, int, int], on_helmet: bool = False
) -> None:
    draw = ImageDraw.Draw(img)
    draw.text(
        (x, y),
        "サワダ電気",
        font=get_font(size),
        fill=(255, 255, 255),
        stroke_width=1 if on_helmet else 2,
        stroke_fill=(100, 100, 100) if on_helmet else stroke,
    )


def px(w: int, h: int, x: float, y: float) -> tuple[int, int]:
    return int(x * w / REF_W), int(y * h / REF_H)


def apply_branding(img: Image.Image, icon: Image.Image) -> None:
    w, h = img.size
    brown = (74, 52, 40)

    # ヘルメット正面（1408x768 基準）
    cover(img, scale_box((318, 48, 528, 158), w, h), (245, 245, 245))
    ix, iy = px(w, h, 328, 52)
    paste_icon(img, icon, ix, iy, int(56 * w / REF_W))
    lx, ly = px(w, h, 388, 98)
    draw_label(img, lx, ly, max(12, int(14 * h / REF_H)), (200, 200, 200), on_helmet=True)

    # 胸元（画像右側＝作業者の左胸）
    cover(img, scale_box((458, 268, 598, 318), w, h), brown)
    ix, iy = px(w, h, 464, 274)
    paste_icon(img, icon, ix, iy, int(44 * w / REF_W))
    lx, ly = px(w, h, 510, 280)
    draw_label(img, lx, ly, max(11, int(13 * h / REF_H)), (30, 20, 15))

    # 左腕上部（画像左側・田中の上）
    cover(img, scale_box((268, 318, 408, 368), w, h), brown)
    ix, iy = px(w, h, 274, 324)
    paste_icon(img, icon, ix, iy, int(40 * w / REF_W))
    lx, ly = px(w, h, 318, 328)
    draw_label(img, lx, ly, max(10, int(12 * h / REF_H)), (30, 20, 15))


def main() -> None:
    if not BACKUP.exists():
        shutil.copy2(HERO, BACKUP)

    img = recolor_uniform(Image.open(BACKUP).convert("RGB"))
    apply_branding(img, logo_icon())
    img.save(HERO, quality=95)
    print("Saved", HERO)


if __name__ == "__main__":
    main()
