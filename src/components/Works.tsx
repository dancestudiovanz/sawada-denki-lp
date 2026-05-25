import React from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, HardHat } from "lucide-react";
import { IMAGES } from "../images";

export default function Works() {
  const projects = [
    {
      id: 1,
      title: "精密機械工場 LED高天井調光システム更新",
      location: "愛知県半田市（乙川地区）",
      date: "2026年3月",
      image: IMAGES.telecomFactory,
      metrics: "消費電力 62% 削減",
      desc: "製造ラインの作業環境向上のため調光LED化。休日を利用し、操業を止めることなく工期内に完工しました。",
      workType: "LED化工事・動力改修",
    },
    {
      id: 2,
      title: "新築二世帯住宅 HEMS分電盤・屋外配線一式",
      location: "愛知県半田市（住吉地区）",
      date: "2026年4月",
      image: IMAGES.residential,
      metrics: "V2Hスマート連携仕様",
      desc: "家全体の電力量をスマート可視化する高性能分電盤、および高出力エアコン用動力専用線を設計施工。",
      workType: "住宅電気・配線工事",
    },
    {
      id: 3,
      title: "商業施設屋上 産業用太陽光発電設備（55kW）",
      location: "愛知県常滑市",
      date: "2026年2月",
      image: IMAGES.solarEco,
      metrics: "単独創電 55kW",
      desc: "日照角度に合わせた高耐食スチール架台の設計からキュービクル（高圧受変電）接続まで一貫して施工。",
      workType: "太陽光発電・創エネ",
    }
  ];

  return (
    <section id="works" className="py-20 bg-white relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 border-l-4 border-brand-blue pl-4">
          <span className="text-[11px] font-bold text-brand-blue tracking-[0.2em]">施工実績</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mt-1">施工実績のご案内</h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
            サワダ電気が愛知県知多半島周辺で手がけてきた、代表的な電気工事・通信インフラの施工事例をご紹介します。
          </p>
        </div>

        {/* Simplifed Cards Layout (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:border-brand-blue/30 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Image Wrap */}
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-navy">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Map Pin Overlay */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded bg-brand-navy/90 backdrop-blur-sm px-2.5 py-1 text-[11px] text-white font-bold">
                    <MapPin className="h-3 w-3 text-brand-blue" />
                    <span>{project.location}</span>
                  </div>

                  <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] font-bold tracking-wider text-white bg-brand-blue px-2 py-0.5 rounded shadow-sm">
                      {project.workType}
                    </span>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-5">
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 font-bold mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-extrabold text-brand-navy tracking-tight line-clamp-2 leading-snug">
                    {project.title}
                  </h3>

                  <div className="mt-4 pt-4 border-t border-gray-50 space-y-2 text-xs">
                    <div className="bg-brand-bg rounded p-2 flex items-center justify-between">
                      <span className="text-[10px] text-gray-400 font-bold">施工数値・特徴</span>
                      <span className="text-[11px] font-bold text-brand-blue">
                        {project.metrics}
                      </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed font-normal flex items-start gap-1 text-[11px]">
                      <HardHat className="h-3.5 w-3.5 text-brand-blue/70 flex-shrink-0 mt-0.5" />
                      <span>{project.desc}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-5 py-3 bg-brand-bg/40 border-t border-gray-50 text-[10px] font-bold text-gray-400 tracking-wider">
                サワダ電気 自社施工
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Bottom Info Box */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400">
            ※一般公開していない工事（工場内部の機密配管・強電工事等）につきましても、ご相談時に実績資料をご覧いただけます。
          </p>
        </div>

      </div>
    </section>
  );
}
