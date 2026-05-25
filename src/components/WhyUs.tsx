import React from "react";
import { motion } from "motion/react";
import { Check, Shield, Users, Landmark, CircleCheck } from "lucide-react";

export default function WhyUs() {
  const metrics = [
    { label: "半田市・知多半島での信頼実績", value: "35+", unit: "年" },
    { label: "電気工事士 国家資格保有者", value: "100", unit: "%" },
    { label: "自社一貫施工によるコスト削減率", value: "最高20", unit: "%" },
    { label: "公共・民間 累計施工棟数", value: "8,500+", unit: "件" },
  ];

  const reasons = [
    {
      num: "01",
      title: "自社施工・地元密着ならではの圧倒的なスピードと適正価格",
      badge: "地元密着",
      desc: "サワダ電気は下請け会社に丸投げしません。お見積りから設計、部材選定、実際の配線から試験まで自社直属の施工部隊が一貫して担当します。無駄な中間マージンをカットし、現場を理解しているからこその最短翌日対応という圧倒的なスピード感を実現します。",
    },
    {
      num: "02",
      title: "住宅の極小工事から大規模工場・太陽光インフラまでのマルチな実績",
      badge: "電気のオールラウンダー",
      desc: "『自宅のコンセントを一つ増やしたい』というご家族の小さな依頼から、『工場のライン変更に伴う動線増設とLED化を休日に終わらせてほしい』という数千万円規模の企業案件、さらに電気の自給自足を促す「太陽光・蓄電池」、高度な「光ファイバー通信インフラ」まであらゆる要望に自社単独で応えられます。",
    },
    {
      num: "03",
      title: "有資格者による安心安全へのこだわり。品質保証と手厚い対面保障",
      badge: "有資格者100%",
      desc: "当社の現場責任者は全員が第一種・第二種電気工事士の国家資格を保有。定期的な安全衛生協議会の実施と、損害保険（PL保険、建設工事保険）への加入により、何よりも「安全第一」を徹底。さらに施工後のトラブル時も地元半田市だからこそ、一本の電話ですぐに駆けつけます。",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative z-10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold text-brand-blue tracking-[0.2em] bg-brand-blue/5 px-3 py-1 rounded">選ばれる理由</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-3">
            半田市で選ばれ続ける、<br className="sm:hidden" />サワダ電気の強み
          </h2>
          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            電気は暮らしと産業の血液です。サワダ電気は、目に見えない配線の裏側まで徹底的にこだわり、長年にわたり地域のインフラを施工してきました。
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Panel: Statistics & Trust Badges */}
          <div className="lg:col-span-5 bg-brand-navy rounded text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl border border-brand-blue/10 min-h-[500px]">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl -ml-8 -mb-8" />

            <div className="relative z-10">
              <span className="text-xs font-bold text-brand-blue tracking-wider bg-white/10 px-2.5 py-1 rounded">信頼の実績</span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-4">数値で見るサワダ電気</h3>
              <p className="text-white/60 text-xs sm:text-sm mt-2 leading-relaxed">
                愛知県半田市を中心に、多くの住民の皆様・法人の皆様に直接支えられて育んできた信頼の証です。
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-10">
                {metrics.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-brand-blue/40 pl-3">
                    <p className="text-white/50 text-[10px] sm:text-xs leading-tight font-medium h-8 flex items-end">
                      {item.label}
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1.5 flex items-baseline">
                      <span className="font-sans text-white tracking-tighter">{item.value}</span>
                      <span className="text-xs sm:text-sm text-brand-blue font-bold ml-1">{item.unit}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Statement bottom banner */}
            <div className="relative z-10 border-t border-white/10 pt-6 mt-10 flex items-start gap-3 text-white/80">
              <CircleCheck className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-white tracking-wide">施工品質と安全の永続保障</p>
                <p className="text-white/50 text-[10px] mt-1 leading-relaxed">
                  工事完了後も半田市全域を対象とした24時間のアフター点検サポート体制。私たちは、作って終わりにはいたしません。
                </p>
              </div>
            </div>
            
          </div>

          {/* Right Panel: The 3 Core Reasons list */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex items-start gap-4 sm:gap-6 group"
              >
                {/* Index number with high contrast design */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <span className="font-sans text-2xl sm:text-3xl font-extrabold text-brand-blue bg-brand-bg w-12 h-12 rounded flex items-center justify-center transition-colors group-hover:bg-brand-blue group-hover:text-white">
                    {reason.num}
                  </span>
                  <div className="w-0.5 h-full bg-gray-100 min-h-[50px] mt-2 group-last:hidden" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-extrabold text-brand-blue tracking-wider bg-brand-blue/5 border border-brand-blue/10 px-2 py-0.5 rounded">
                      {reason.badge}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-brand-navy tracking-tight leading-snug">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
