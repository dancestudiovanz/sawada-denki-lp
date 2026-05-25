import React from "react";
import { Link } from "react-router-dom";
import { Shield, Clock, MapPin } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const siteLinks = [
    { label: "トップ", href: "/" },
    { label: "選ばれる理由", href: "/#why-us" },
    { label: "事業内容", href: "/#services" },
    { label: "施工事例", href: "/#works" },
    { label: "採用情報", href: "/#recruitment" },
    { label: "よくある質問", href: "/#faq" },
    { label: "プライバシーポリシー", href: "/privacy" },
  ];

  const licenses = [
    "愛知県知事 許可（一般-第XXXXX号）電気工事業",
    "愛知県知事 届出（第XXXXXX号）一般用電気工作物・自家用電気工作物",
    "登録電気工事業者 届出済",
    "NTT東日本/西日本 通信設備工事請負登録業者"
  ];

  return (
    <footer className="bg-brand-navy border-t border-white/5 text-white/80 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer grid: Brand / Sitemap / Licenses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Corporate details */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <BrandLogo
                variant="footer"
                imageClassName="h-14 sm:h-16 w-auto"
                showText={false}
              />
            </Link>

            {/* Address and details */}
            <div className="space-y-3.5 text-xs sm:text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-brand-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold">愛知県半田市乙川町XX-XX</p>
                  <p className="text-white/40 text-[10px] mt-0.5">※知多半島全域をカバー（半田・常滑・阿久比・武豊・南知多など）</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-brand-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">営業時間：平日 9:00 〜 18:00</p>
                  <p className="text-white/40 text-[10px] mt-0.5">定休日：土曜日・日曜日・祝日</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Numbers (Visual block) */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-xs">
              <div>
                <span className="text-white/40 block text-[9px] font-bold">お電話</span>
                <span className="text-white font-bold tracking-wider text-base">0569-21-XXXX</span>
              </div>
              <div>
                <span className="text-white/40 block text-[9px] font-bold">ファックス</span>
                <span className="text-white/70 font-semibold tracking-wider text-base">0569-21-YYYY</span>
              </div>
            </div>
          </div>

          {/* Col 2: Legal/Technical licenses */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold text-white tracking-wider border-b border-white/10 pb-2">
              建設業許可・許認可届出
            </h3>
            
            <ul className="space-y-3 text-xs text-white/60">
              {licenses.map((lic, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" />
                  <span>{lic}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 flex items-center gap-2 text-[10px] text-white/40 font-bold bg-white/5 p-3 rounded border border-white/5">
              <Shield className="h-4 w-4 text-brand-blue flex-shrink-0" />
              <span>「安全第一・工期順守」知多電気工事業安全協議会 加盟店</span>
            </div>
          </div>

          {/* Col 3: Sitemap */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-white tracking-wider border-b border-white/10 pb-2">
              サイトナビ
            </h3>
            
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
              {siteLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-white/60 hover:text-white transition-colors py-0.5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

        </div>

        {/* Bottom copyright declaration */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-medium">
          <p>© {currentYear} 株式会社サワダ電気　無断転載を禁じます。（愛知県半田市・電気工事業合同リニューアル設計）</p>
          
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
            <span>/</span>
            <a href="/#" className="hover:text-white transition-colors">
              特定商取引表記
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
