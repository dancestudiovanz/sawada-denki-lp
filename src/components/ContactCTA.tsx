import React from "react";
import { Phone, Mail, FileText, CheckCircle } from "lucide-react";

interface ContactCTAProps {
  onOpenInquiry: (category?: string) => void;
}

export default function ContactCTA({ onOpenInquiry }: ContactCTAProps) {
  return (
    <section id="contact-cta" className="py-20 bg-brand-navy text-white relative overflow-hidden z-10 scroll-mt-20">
      
      {/* Decorative vector ring */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-brand-blue/30 via-brand-navy to-brand-navy rounded-lg border border-white/10 p-8 sm:p-12 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left side text information */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[10px] font-extrabold text-brand-blue tracking-widest bg-brand-blue/20 px-2.5 py-1 rounded">
                お問い合わせ
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                まずはお気軽にご相談ください。<br className="hidden sm:inline" />
                現地調査・初期見積りは完全無料です。
              </h2>
              
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-lg font-normal">
                『工事費用がどのくらいになるか知りたい』『現地を見て施工可能か判断してほしい』など、どのような些細な疑問でも真摯に対応いたします。
              </p>

              {/* Trust assurances checkmarks */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-xs text-white/90">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4.5 w-4.5 text-brand-blue flex-shrink-0" />
                  <span>しつこい勧誘一切なし</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4.5 w-4.5 text-brand-blue flex-shrink-0" />
                  <span>半田市内 最短翌日訪問可</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4.5 w-4.5 text-brand-blue flex-shrink-0" />
                  <span>相見積もり歓迎</span>
                </div>
              </div>
            </div>

            {/* Right side interactive channel options (Phone vs Email Modal) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Channel 1: Phone call info */}
              <div className="bg-white/5 border border-white/5 rounded p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="p-2 rounded bg-white/5 text-brand-blue w-max mb-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <p className="text-white/50 text-[10px] font-bold tracking-wider">お電話でのご相談</p>
                  <p className="font-sans text-xl sm:text-2xl font-black text-white mt-1.5 tracking-wider tabular-nums">0569-21-XXXX</p>
                </div>
                
                <div className="mt-6 text-[10px] text-white/50 leading-relaxed font-semibold">
                  <p>受付時間：平日 9:00 〜 18:00</p>
                  <p>定休日：土・日・祝日</p>
                </div>
              </div>

              {/* Channel 2: Email request modal trigger */}
              <button
                onClick={() => onOpenInquiry("general")}
                className="bg-brand-blue hover:bg-brand-blue/95 border border-brand-blue text-left rounded p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 shadow-xl shadow-brand-blue/10 hover:shadow-brand-blue/30 hover:-translate-y-0.5 cursor-pointer"
              >
                <div>
                  <div className="p-2 rounded bg-white/10 text-white w-max mb-4">
                    <FileText className="h-5 w-5" />
                  </div>
                  <p className="text-white/80 text-[10px] font-bold tracking-wider">オンラインフォームでのご相談</p>
                  <p className="text-lg sm:text-xl font-extrabold text-white mt-1.5">無料お見積り依頼</p>
                </div>
                
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs text-white font-extrabold">
                  <span>入力約2分で簡単送信</span>
                  <span>→</span>
                </div>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
