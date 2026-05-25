import React from "react";
import { IMAGES } from "../images";

interface BrandLogoProps {
  /** ロゴ画像の高さクラス（例: h-10, h-12） */
  imageClassName?: string;
  /** 会社名テキストを横に表示するか */
  showText?: boolean;
  /** フッター用の大きめレイアウト */
  variant?: "header" | "footer";
}

export default function BrandLogo({
  imageClassName = "h-10 sm:h-11 w-auto",
  showText = true,
  variant = "header",
}: BrandLogoProps) {
  const isFooter = variant === "footer";

  return (
    <div className={`flex items-center gap-2.5 ${isFooter ? "gap-3" : ""}`}>
      <img
        src={IMAGES.logo}
        alt="株式会社サワダ電気"
        className={`${imageClassName} object-contain object-left shrink-0`}
        width={154}
        height={142}
        decoding="async"
      />
      {showText && (
        <div className="min-w-0">
          {isFooter ? (
            <>
              <span className="text-white font-black text-xl tracking-wide block drop-shadow-sm">
                株式会社サワダ電気
              </span>
              <span className="text-white/50 text-[10px] tracking-wide font-medium leading-none">
                愛知県半田市・総合電気工事
              </span>
            </>
          ) : (
            <>
              <span className="text-white font-black text-lg sm:text-xl tracking-wide drop-shadow-sm leading-tight block">
                サワダ電気
              </span>
              <p className="text-white/75 text-[10px] tracking-tight leading-none -mt-0.5 drop-shadow-sm hidden sm:block">
                愛知県半田市・総合電気工事
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
