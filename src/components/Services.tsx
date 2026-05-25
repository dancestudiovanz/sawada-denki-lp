import React from "react";
import { motion } from "motion/react";
import { User, Building2, SunDim, Radio, Check } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      id: "industrial",
      icon: Building2,
      label: "1. 店舗・工場の電気工事",
      subtitle: "高圧受変電・幹線改修・LED化",
      desc: "店舗・オフィスの移転リニューアル照明、空調設計から工場の高天井LED化、受変電設備（キュービクル）の増設まで対応。夜間や土日の施工調整も自社で柔軟に行います。",
      items: [
        "工場まるごと省エネ高天井LED化",
        "高圧受変電（キュービクル）増設・保守",
        "店舗や飲食店の内装設計・配線全般",
        "業務用エアコン・動力空調の敷設",
      ]
    },
    {
      id: "residential",
      icon: User,
      label: "2. 住宅・住まいの電気工事",
      subtitle: "コンセント増設・エアコン・配線補修",
      desc: "「コンセントを一カ所増やしたい」「お風呂の換気扇が回らない」「インターホンを録画付きにしたい」など、日常の不便を半田市密着のスピーディーな体制で解決します。",
      items: [
        "コンセントやスイッチの増設・移設",
        "エアコン・空調機器の取付・冷媒配管",
        "分電盤（配電盤）の安全交換",
        "テレビドアホン・防犯カメラ等設置",
      ]
    },
    {
      id: "solar",
      icon: SunDim,
      label: "3. 太陽光発電・省エネ設備",
      subtitle: "太陽光・家庭用蓄電池・EV充電口",
      desc: "知多半島の日照条件に合わせた太陽光モジュール（創エネ）と蓄電池（蓄エネ）の最適化。これからの時代に欠かせないEV・PHEV用の屋外高出力コンセント設置も承ります。",
      items: [
        "産業用・住宅用太陽光発電の設計施工",
        "災害対策・夜間用のリチウム蓄電池設置",
        "EV/PHEV屋外高速充電専用コンセント",
        "エコキュートなど省エネ給湯システム",
      ]
    },
    {
      id: "telecom",
      icon: Radio,
      label: "4. 通信・光インフラ工事",
      subtitle: "光回線・高速LAN・融着接続",
      desc: "通信キャリア代理店としてのノウハウを活かした高度な光ファイバー融着接続。建物内の配線設計や、通信損失（ロス）を極限まで抑えたオフィス高速LAN環境を構築します。",
      items: [
        "光ファイバーケーブル架空敷設・引込",
        "光端末融着接続・通信損失測定試験",
        "オフィス・工場の高速LAN構築（CAT6A）",
        "中継AP/Wi-Fi環境の強度調節・整備",
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-bg relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 border-l-4 border-brand-blue pl-4">
          <span className="text-[11px] font-bold text-brand-blue tracking-[0.2em]">事業内容</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mt-1">
            事業内容・サービス一覧
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
            サワダ電気では、地元の一般家庭の小さなご相談から、工場や商業オフィスなどの大規模な幹線・設備工事まで、一貫して丁寧な自社施工を行います。
          </p>
        </div>

        {/* Categories Grid (Clean & Direct) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {serviceCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-lg p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-brand-blue/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-brand-bg text-brand-blue flex-shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-brand-navy tracking-tight">
                      {cat.label}
                    </h3>
                    <p className="text-brand-blue text-[11px] font-extrabold tracking-wide mt-0.5">
                      {cat.subtitle}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed font-normal">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                {/* Sub items grid */}
                <div className="mt-5 pt-5 border-t border-gray-50">
                  <p className="text-[10px] font-black text-gray-400 tracking-wider mb-3">主な取扱い工事：</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                    {cat.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-brand-blue flex-shrink-0" />
                        <span className="font-medium text-gray-650 truncate" title={item}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
