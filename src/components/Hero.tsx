import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Shield, Landmark, MapPin, Zap } from "lucide-react";
import { IMAGES } from "../images";

interface HeroProps {
  onOpenInquiry: (category?: string) => void;
}

export default function Hero({ onOpenInquiry }: HeroProps) {
  const trustItems = [
    { icon: MapPin, text: "愛知県半田市・知多半島対応" },
    { icon: Shield, text: "電気工事業者 許可取得済" },
    { icon: Zap, text: "住宅 / 法人 / 現場工事対応" },
    { icon: Landmark, text: "太陽光・通信インフラ施工店" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-900 pt-20">
      
      {/* Background Image with Parallax or Static Styling */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBg}
          alt="サワダ電気の電気工事現場"
          className="w-full h-full object-cover object-center transform scale-105 select-none brightness-[1.15] saturate-[0.9] contrast-[1.03]"
          referrerPolicy="no-referrer"
        />
        {/* Neutral + warm overlays — bright feel, readable text */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/50 via-stone-900/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-stone-900/10 to-white/15" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col justify-center">
        
        <div className="max-w-4xl">
          {/* Top Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 border border-white/35 text-white text-xs sm:text-sm font-semibold mb-6 tracking-wider hero-text-shadow"
          >
            <span className="flex h-2 w-2 rounded-full bg-amber-300 animate-pulse" />
            <span>半田市・知多半島の施工パートナー</span>
          </motion.div>

          {/* Main Copy */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.25] sm:leading-[1.15] hero-text-shadow"
          >
            <span className="block text-amber-100/95 font-semibold text-lg sm:text-2xl tracking-wide mb-2">サワダ電気</span>
            半田市・知多半島の<br />
            <span className="relative inline-block text-white">
              電気・通信工事
            </span>
            を支える技術パートナー
          </motion.h1>

          {/* Sub Copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/95 text-sm sm:text-lg mt-6 leading-relaxed max-w-2xl font-medium hero-text-shadow"
          >
            住宅の電気工事から、店舗・工場のLED化、太陽光設備、光ファイバー工事まで。
            地域に根ざした確かな技術で、暮らしと現場を支えます。サワダ電気にお任せください。
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10"
          >
            <button
              onClick={() => onOpenInquiry("general")}
              className="group relative rounded bg-brand-blue hover:bg-brand-blue/95 text-white font-extrabold px-8 py-4 text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <span>工事の相談をする（無料お見積り）</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform" />
            </button>

            <a
              href="#recruitment"
              className="rounded bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold px-8 py-4 text-sm sm:text-base flex items-center justify-center border border-white/40 hover:border-white/60 transition-all text-center hero-text-shadow"
            >
              採用情報を見る
            </a>
          </motion.div>

          {/* Small Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 sm:mt-24 border-t border-white/25 pt-8"
          >
            <p className="text-white/80 text-[11px] font-bold tracking-widest mb-4 hero-text-shadow">信頼と実績のステータス</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 bg-white/15 backdrop-blur-md rounded border border-white/20 p-3.5 hover:border-white/35 hover:bg-white/20 transition-colors"
                >
                  <div className="flex-shrink-0 p-1 rounded-full bg-white/25 text-amber-100">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-wide hero-text-shadow">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom subtle design shape */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />
    </section>
  );
}
