import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Calendar, MapPin } from "lucide-react";
import BrandLogo from "./BrandLogo";

interface HeaderProps {
  onOpenInquiry?: (category?: string) => void;
  variant?: "home" | "subpage";
}

export default function Header({ onOpenInquiry, variant = "home" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = variant === "home";

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const menuItems = [
    { label: "選ばれる理由", href: "/#why-us" },
    { label: "事業内容", href: "/#services" },
    { label: "施工実績", href: "/#works" },
    { label: "採用情報", href: "/#recruitment" },
    { label: "よくある質問", href: "/#faq" },
  ];

  const headerClass = isHome
    ? isScrolled
      ? "bg-stone-900/92 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
      : "bg-gradient-to-b from-stone-950/45 to-transparent py-5"
    : "bg-stone-900/95 backdrop-blur-md border-b border-white/10 py-3 shadow-lg";

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${headerClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="group transition-transform duration-200 hover:scale-[1.02]">
            <BrandLogo imageClassName="h-9 sm:h-11 w-auto drop-shadow-md" showText />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {isHome && (
              <div className="flex items-center gap-5 border-r border-white/10 pr-6 text-white text-xs">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-white/15 text-amber-100">
                    <MapPin className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-[10px] leading-none">地域密着</p>
                    <p className="font-semibold text-white mt-0.5 drop-shadow-sm">愛知県半田市拠点</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-white/15 text-amber-100">
                    <Calendar className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-[10px] leading-none">定休日：土・日・祝日</p>
                    <p className="font-semibold text-white mt-0.5 drop-shadow-sm">相談受付 9:00〜18:00</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-white/15 text-amber-100">
                    <Phone className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-[10px] leading-none">お気軽にどうぞ</p>
                    <p className="font-bold text-white tracking-wider text-sm mt-0.5 drop-shadow-sm">0569-21-XXXX</p>
                  </div>
                </div>
              </div>
            )}

            <nav className="flex items-center gap-5 h-full">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-white/90 hover:text-white text-sm font-medium transition-colors tracking-wide py-1 border-b border-transparent hover:border-amber-200/90 drop-shadow-sm"
                >
                  {item.label}
                </Link>
              ))}
              {!isHome && (
                <Link
                  to="/privacy"
                  className="text-white/90 hover:text-white text-sm font-medium transition-colors tracking-wide py-1"
                >
                  プライバシーポリシー
                </Link>
              )}
            </nav>

            {isHome && onOpenInquiry ? (
              <button
                onClick={() => onOpenInquiry("general")}
                className="rounded bg-brand-blue hover:bg-brand-blue/95 text-white text-xs font-extrabold px-5 py-2.5 shadow-md shadow-brand-blue/20 hover:shadow-brand-blue/45 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                無料相談・お見積り
              </button>
            ) : (
              <Link
                to="/#contact-cta"
                className="rounded bg-brand-blue hover:bg-brand-blue/95 text-white text-xs font-extrabold px-5 py-2.5 shadow-md transition-all"
              >
                お問い合わせ
              </Link>
            )}
          </div>

          <div className="flex items-center lg:hidden gap-3">
            {isHome && onOpenInquiry ? (
              <button
                onClick={() => onOpenInquiry("general")}
                className="rounded bg-brand-blue text-white text-xs font-bold px-3 py-2 cursor-pointer shadow-md"
              >
                無料相談
              </button>
            ) : (
              <Link
                to="/"
                className="rounded bg-brand-blue text-white text-xs font-bold px-3 py-2 shadow-md"
              >
                トップ
              </Link>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="メニュー開閉"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-stone-900 border-b border-white/10 py-6 min-h-[40vh] flex flex-col justify-between shadow-2xl px-4">
          <nav className="space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/85 hover:text-white text-base font-semibold tracking-wide py-2 border-b border-white/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/privacy"
              onClick={() => setIsOpen(false)}
              className="block text-white/85 hover:text-white text-base font-semibold tracking-wide py-2 border-b border-white/5"
            >
              プライバシーポリシー
            </Link>
          </nav>

          <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
            <div className="flex items-center gap-3 text-white text-sm">
              <Phone className="h-5 w-5 text-amber-200" />
              <div>
                <p className="text-white/75 text-xs">お電話でのご相談（平日 9:00〜18:00）</p>
                <p className="text-lg font-bold tracking-widest mt-0.5">0569-21-XXXX</p>
              </div>
            </div>

            {isHome && onOpenInquiry ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenInquiry("general");
                }}
                className="w-full text-center rounded bg-brand-blue text-white font-bold py-3 text-sm shadow-lg cursor-pointer"
              >
                無料お見積り・工事のご相談
              </button>
            ) : (
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center rounded bg-brand-blue text-white font-bold py-3 text-sm shadow-lg"
              >
                トップページへ
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
