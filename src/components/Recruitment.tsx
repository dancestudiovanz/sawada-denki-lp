import React from "react";
import { Users, GraduationCap, Clock, Check, HeartHandshake, Smile, ShieldCheck, HelpCircle } from "lucide-react";
import { IMAGES } from "../images";

interface RecruitmentProps {
  onOpenInquiry: (category: string) => void;
}

export default function Recruitment({ onOpenInquiry }: RecruitmentProps) {
  const benefits = [
    {
      icon: GraduationCap,
      title: "資格取得にかかる費用は、すべて会社が「全額」負担します",
      desc: "電気工事士（第一種・第二種）、高所作業車、電気通信主任技術者などの国家資格受験料、試験会場への交通費、講習会の費用、参考書代にいたるまで、会社が完全にサポート。「手に職をつけたい」という意欲を応援します。"
    },
    {
      icon: HeartHandshake,
      title: "最初は道具の名前から。絶対に『おいてけぼり』にしません",
      desc: "「電気は難しそう、危険だし不安…」と思うのは当然です。サワダ電気では、1年目は必ず専任の先輩スタッフとペアを組み、工具の名前や準備といった軽作業から一歩ずつ慣れていただきます。危険な作業を強要することは絶対にありません。"
    },
    {
      icon: Clock,
      title: "プライベートも充実。残業は「月平均10時間以下」のみ",
      desc: "仕事現場は地元・愛知県半田市を中心に知多半島周辺のみ。遠方への長期の出張や、往復だけで何時間もかかるような移動ロスがなく、定時でスッと帰れる日が多いのも特徴です。家族との時間、趣味の時間をしっかり確保できます。"
    }
  ];

  const qas = [
    {
      q: "本当に完全な未経験ですが、ついていけますか？",
      a: "現在サワダ電気で活躍している先輩メンバーの多くも、以前は電気の知識ゼロからスタートしました。マンツーマンで手順を教える充実した育成体制がありますので安心してご応募ください。"
    },
    {
      q: "社風や一緒に働く人の雰囲気はどんな感じですか？",
      a: "10代の若手から経験豊富なベテランまで在籍していますが、上下関係の厳しいトゲトゲした空気は一切ありません。いつも笑顔と冗談を交えつつ、安全第一でお互いを助け合う明るい職場です。"
    }
  ];

  return (
    <section id="recruitment" className="py-24 bg-gradient-to-b from-white via-brand-bg to-white relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric Bright Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-8 border-b border-gray-150">
          <div className="lg:col-span-8 space-y-3">
            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-brand-blue tracking-[0.15em] bg-brand-blue/10 px-3 py-1 rounded">
              <Smile className="h-3.5 w-3.5" />
              <span>未経験者・見学大歓迎！正社員募集</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight sm:leading-snug">
              特別な経歴も、理系の知識もいりません。<br />
              一歩ずつ「一生モノの技術」を身につけよう。
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-8">
            <p className="text-gray-650 text-sm leading-relaxed font-normal">
              サワダ電気は、愛知県半田市に本社を構え、地元のお客様を電気の技術で支え続けてきた会社です。「真面目に、明るく取り組める方」であれば、学歴や経歴、電気の知識は完全に不問。一人前になるまで全員で育てます。
            </p>
          </div>
        </div>

        {/* Highlight Banner (Encouraging Badges) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { tag: "学歴・経歴不問", desc: "中卒・高卒から意欲重視で採用" },
            { tag: "転勤は一切なし", desc: "半田市周辺の地域密着施工" },
            { tag: "資格取得費用を全額負担", desc: "国家資格の取得を完全バックアップ" },
            { tag: "安全器具完全支給", desc: "空調服から保護シューズまで用意" }
          ].map((badge, idx) => (
            <div key={idx} className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm text-center">
              <p className="text-xs sm:text-sm font-black text-brand-blue tracking-tight">{badge.tag}</p>
              <p className="text-gray-400 text-[10px] mt-1 font-medium">{badge.desc}</p>
            </div>
          ))}
        </div>

        {/* Core Layout split: Left Visual Card / Right Benefit Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left panel: Recruitment Team details and status */}
          <div className="lg:col-span-5 flex flex-col justify-between border border-gray-100 rounded-lg overflow-hidden shadow-sm bg-white">
            
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-navy">
              <img
                src={IMAGES.recruitment}
                alt="サワダ電気のスタッフ"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[9px] font-bold text-white bg-brand-blue px-2 py-0.5 rounded tracking-wide">
                  愛知県半田市本社
                </span>
                <p className="text-sm font-bold mt-2 tracking-tight leading-relaxed">
                  「僕も最初は、ドライバーとペンの違いしか分かりませんでした。頼れる先輩ばかりなので絶対安心ですよ！」
                </p>
              </div>
            </div>

            {/* Quick stats / Employment Requirements (Fully Mobile Optimized Spacing) */}
            <div className="p-6 sm:p-8 space-y-6 bg-brand-bg/50">
              <div>
                <p className="text-xs font-bold text-brand-navy tracking-wider mb-3 text-center sm:text-left">募集要項の要約：</p>
                
                <div className="space-y-3.5">
                  {[
                    { label: "職種名", value: "現場電気工事士・通信インフラ技能工" },
                    { label: "雇用形態", value: "正社員（試用期間あり / 未経験歓迎）" },
                    { label: "勤務地", value: "半田市・阿久比町等、知多半島エリア一帯（直行直帰可）" },
                    { label: "初任給目安", value: "月給 230,000円〜450,000円 ＋ 資格手当 ＋ 残業完全支給" },
                    { label: "賞与・昇給", value: "昇給年1回、賞与年2回支給" },
                  ].map((field, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row justify-between border-b border-gray-200/50 pb-2 text-xs sm:text-sm">
                      <span className="text-gray-400 font-bold sm:mb-0 mb-1">{field.label}</span>
                      <span className="text-brand-navy font-bold sm:text-right text-left">{field.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recruitment action button */}
              <button
                onClick={() => onOpenInquiry("recruit")}
                className="w-full inline-flex items-center justify-center gap-2 rounded bg-brand-navy hover:bg-brand-blue text-white px-5 py-4 text-xs font-black tracking-widest transition-all shadow-md shadow-brand-navy/10 cursor-pointer"
              >
                <Users className="h-4 w-4" />
                <span>採用要項への応募・まずは社内見学を希望する</span>
              </button>
              
              <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                ※「いきなり応募は緊張する」という方は、工場や仕事風景を見学するだけのカジュアル来社も可能です。
              </p>
            </div>

          </div>

          {/* Right panel: Core Benefit explanations & Beginner Questions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <h3 className="text-lg sm:text-xl font-bold text-brand-navy tracking-tight border-l-4 border-brand-blue pl-3">
              未経験のあなたに約束する、3つの優遇体制
            </h3>

            <div className="space-y-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4 sm:gap-5 items-start">
                  {/* Icon Emblem */}
                  <div className="flex-shrink-0 flex items-center justify-center p-3 rounded-lg bg-brand-blue/5 text-brand-blue w-12 h-12">
                    <benefit.icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="text-base font-extrabold text-brand-navy tracking-tight leading-snug">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-650 text-xs sm:text-sm mt-1.5 leading-relaxed font-normal">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro Q&A Container for extra warmth and assurance */}
            <div className="bg-brand-blue/5 rounded-lg p-6 border border-brand-blue/10">
              <span className="inline-flex items-center gap-1 text-[10px] text-brand-blue font-extrabold tracking-wider mb-2">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>未経験に関するよくある不安に回答</span>
              </span>
              
              <div className="space-y-4 mt-2">
                {qas.map((qa, i) => (
                  <div key={i} className="text-xs sm:text-sm">
                    <p className="font-extrabold text-brand-navy">問．{qa.q}</p>
                    <p className="text-gray-650 mt-1 font-normal leading-relaxed">{qa.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Workplace Culture Bullet Points with no-green rule check */}
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-gray-150">
              <h4 className="text-xs font-bold text-brand-navy tracking-wider mb-4 border-b border-gray-100 pb-2">福利厚生 ＆ 働きやすい社内環境：</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
                {[
                  "年間休日110日（お盆・年末年始は長期連休あり）",
                  "通勤ファミリー手当、マイカー通勤OK（駐車場無料）",
                  "有資格者は電気工事手当として最高月5万円加算",
                  "年に一度の安全ミーティング＆頑張りおつかれさま賞",
                  "高品質で動きやすい空調機能付き現場服、防護手袋支給",
                  "工具や測定器具は常に最軽量の新型へアップデート"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-brand-blue flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
