import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      q: "コンセント1個の増設など、小さな工事でも依頼できますか？",
      a: "はい、大歓迎です。サワダ電気では「コンセントが足りない」「スイッチが反応しない」「電球を高所のLEDに替えたい」といった日常生活の小さなお悩みにも迅速に対応しております。お気軽にご相談ください。"
    },
    {
      q: "主な工事対応エリアはどこですか？",
      a: "愛知県半田市を中心に、知多半島全域（常滑市、東海市、大府市、知多市、阿久比町、東浦町、武豊町、美浜町、南知多町）をカバーしています。地域密着だからこそ、急なトラブルにもスピーディーに対応可能です。"
    },
    {
      q: "工場の操業や店舗の営業を止めずに工事を行うことは可能ですか？",
      a: "はい、お任せください。事前にお打ち合わせを綿密に行い、操業スケジュールに影響が出ないよう、土日祝日の休業日や深夜時間帯などに時間枠を合わせて施工します。エリアを分けた段階施工などのご相談も可能です。"
    },
    {
      q: "見積もりや現地調査に費用はかかりますか？",
      a: "半田市および知多半島エリア内であれば、ご相談、現地状況の調査、お見積りはすべて無料です。お見積り後に断って頂いても費用は一切発生いたしませんので、まずはお気軽にご相談ください。"
    }
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-brand-bg relative z-10 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Headings */}
        <div className="max-w-3xl mb-12 border-l-4 border-brand-blue pl-4">
          <span className="text-[11px] font-bold text-brand-blue tracking-[0.2em]">よくある質問</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mt-1">よくあるご質問</h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1.5 leading-relaxed">ご検討時によく寄せられる疑問にお答えします。その他ご不明な点もお気軽にご相談ください。</p>
        </div>

        {/* Collapsible Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-100 overflow-hidden transition-all duration-200 shadow-sm"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full text-left p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-gray-50/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-sans text-xs font-bold text-brand-blue bg-brand-blue/5 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      問
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-brand-navy tracking-tight leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  
                  {/* Indicator Icon */}
                  <div className="flex-shrink-0 mt-1">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-brand-blue stroke-[3px]" />
                    ) : (
                      <Plus className="h-4 w-4 text-gray-400 stroke-[3px]" />
                    )}
                  </div>
                </button>

                {/* Animated collapse content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 border-t border-gray-50 text-gray-600 text-xs sm:text-sm leading-relaxed pt-4 flex gap-3 bg-brand-bg/10">
                        <span className="font-sans text-xs font-bold text-brand-blue bg-brand-blue/5 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                          答
                        </span>
                        <div className="flex-1 font-medium text-brand-body text-xs sm:text-sm">
                          {faq.a}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Still Have Question banner */}
        <div className="mt-10 text-center text-xs text-gray-400">
          ※上記以外のご質問は、下の{" "}
          <a href="#contact-cta" className="text-brand-blue underline font-bold">
            お問い合わせ窓口
          </a>{" "}
          よりお気軽にお尋ねください。
        </div>

      </div>
    </section>
  );
}
