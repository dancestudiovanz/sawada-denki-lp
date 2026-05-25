import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, Send, PhoneCall, Link } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: string;
}

export default function InquiryModal({ isOpen, onClose, defaultType = "general" }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: defaultType,
    message: "",
    agree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.agree) {
      alert("必須項目をご入力の上、個人情報保護方針への同意をお願いいたします。");
      return;
    }
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      category: "general",
      message: "",
      agree: false,
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-navy/85 backdrop-blur-md"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-brand-navy p-6 text-white">
              <div>
                <span className="text-xs font-semibold tracking-wider text-brand-blue bg-white/10 px-2 py-1 rounded">迅速なご返答</span>
                <h3 className="mt-1 text-xl font-bold tracking-tight">無料お見積り・工事のご相談</h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="閉じる"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="max-h-[75vh] overflow-y-auto p-6 md:p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">ご相談・お見積りの種類 <span className="text-red-500 font-normal">*必須</span></label>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {[
                        { id: "general", label: "電気工事全般" },
                        { id: "industrial", label: "工場・店舗・LED化" },
                        { id: "residential", label: "一般家庭の電気工事" },
                        { id: "solar", label: "太陽光発電・エコ設備" },
                        { id: "telecom", label: "通信・光ファイバー" },
                        { id: "recruit", label: "採用について" },
                      ].map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, category: cat.id })}
                          className={`rounded border px-3 py-2 text-center text-xs font-medium transition-all duration-200 ${
                            formData.category === cat.id
                              ? "border-brand-blue bg-brand-blue/5 text-brand-blue ring-1 ring-brand-blue"
                              : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Company Name (Optional) */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-1.5">会社名・団体名 <span className="text-gray-400 text-xs font-normal">（法人の場合）</span></label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="例）株式会社サワダテクノロジーズ"
                      className="w-full rounded border border-gray-200 px-4 py-2.5 text-sm text-brand-navy placeholder:text-gray-400 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    />
                  </div>

                  {/* Name */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1.5">お名前 <span className="text-red-500 text-xs font-normal">*必須</span></label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="例）沢田 太郎"
                        className="w-full rounded border border-gray-200 px-4 py-2.5 text-sm text-brand-navy placeholder:text-gray-400 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1.5">お電話番号 <span className="text-red-500 text-xs font-normal">*必須</span></label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="例）0569-XX-XXXX"
                        className="w-full rounded border border-gray-200 px-4 py-2.5 text-sm text-brand-navy placeholder:text-gray-400 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-1.5">メールアドレス <span className="text-red-500 text-xs font-normal">*必須</span></label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@sawadadenki.jp"
                      className="w-full rounded border border-gray-200 px-4 py-2.5 text-sm text-brand-navy placeholder:text-gray-400 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-1.5">お問い合せ・ご相談内容 <span className="text-gray-400 text-xs font-normal">（具体的な工事時期や規模など）</span></label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="店舗のLED照明への変更について見積もりが欲しい。知多半島内の工事エリアか確認したい等、お気軽にご記載ください。"
                      className="w-full rounded border border-gray-200 px-4 py-2.5 text-sm text-brand-navy placeholder:text-gray-400 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue resize-none"
                    />
                  </div>

                  {/* Privacy Agreement */}
                  <div className="bg-brand-bg rounded-lg p-4 text-xs text-gray-500 space-y-2">
                    <p className="font-bold text-brand-navy">【個人情報の取扱について】</p>
                    <p>
                      ご記入いただいた個人情報は、お問い合せへの対応およびお見積り送付の目的にのみ利用いたします。第三者への開示や他の目的への流用は行いません。
                    </p>
                    <label className="flex items-start gap-2.5 cursor-pointer pt-2 text-brand-navy font-semibold select-none">
                      <input
                        type="checkbox"
                        checked={formData.agree}
                        onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                        className="mt-0.5 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                      />
                      <span>個人情報保護方針に同意します *必須</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded bg-brand-navy text-white px-5 py-3.5 text-sm font-bold shadow-lg shadow-brand-navy/15 hover:bg-brand-blue hover:shadow-brand-blue/15 transition-all duration-200 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>この内容で送信する（無料お問い合せ）</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <CheckCircle className="mx-auto h-16 w-16 text-brand-green" />
                  <h4 className="mt-6 text-2xl font-bold text-brand-navy">お問い合せを送信しました</h4>
                  <p className="mt-3 text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    この度はお問い合せいただき誠にありがとうございます。
                    電気工事の担当者より、翌営業日中にお電話またはメールにて折り返しご連絡差し上げます。
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto rounded bg-brand-navy hover:bg-brand-navy/90 text-white px-6 py-2.5 text-xs font-bold transition-all cursor-pointer"
                    >
                      閉じる
                    </button>
                    <div className="flex items-center gap-1.5 text-xs text-brand-blue font-bold">
                      <PhoneCall className="h-4 w-4" />
                      <span>お急ぎの方：0569-21-XXXX</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
