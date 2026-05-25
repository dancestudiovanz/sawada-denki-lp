import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BrandLogo from "../components/BrandLogo";

const sections = [
  {
    title: "1. 基本方針",
    body: `株式会社サワダ電気（以下「当社」）は、お客様・採用応募者・お取引先などからお預かりする個人情報の重要性を認識し、個人情報の保護に関する法律その他の関連法令・ガイドラインを遵守し、適切な取得・利用・管理に努めます。`,
  },
  {
    title: "2. 事業者情報",
    body: `事業者名：株式会社サワダ電気
所在地：〒475-XXXX 愛知県半田市乙川町XX-XX
代表者：代表取締役 ○○ ○○
お問い合わせ窓口：0569-21-XXXX（平日 9:00〜18:00）
メール：info@sawadadenki.jp（※公開用アドレスに差し替えてください）`,
  },
  {
    title: "3. 取得する個人情報",
    body: `当社は、以下の場面で必要な範囲の個人情報を取得することがあります。

・お問い合わせ・お見積りフォーム：氏名、会社名、電話番号、メールアドレス、ご住所、ご相談内容など
・採用応募：氏名、連絡先、学歴・職歴、応募動機など（応募フォーム・メール等を通じて取得する場合）
・お電話・ファックス・メール等によるお問い合わせ：ご連絡先、お問い合わせ内容
・ウェブサイトの利用状況：Cookie、アクセスログ等（第8条参照）`,
  },
  {
    title: "4. 利用目的",
    body: `取得した個人情報は、以下の目的の範囲内で利用します。

・お問い合わせ・ご相談・お見積りへの対応
・電気工事・通信工事等の業務遂行、契約履行、アフターサポート
・採用選考、入社手続きに関する連絡
・当社サービス・採用情報等に関するご案内（ご同意いただいた場合）
・不正利用の防止、ウェブサイトの品質向上
・法令に基づく対応`,
  },
  {
    title: "5. 第三者提供",
    body: `当社は、次の場合を除き、ご本人の同意なく個人情報を第三者に提供しません。

・ご本人の同意がある場合
・法令に基づき開示が求められた場合
・人の生命・身体・財産の保護のために必要であり、ご本人の同意取得が困難な場合
・業務委託先への提供（下記第6条）

なお、統計的に個人を識別できない形式に加工した情報については、この限りではありません。`,
  },
  {
    title: "6. 業務委託",
    body: `利用目的の達成に必要な範囲で、個人情報の取扱いを外部事業者に委託することがあります。その際は委託先を適切に選定し、契約等により安全管理措置を義務付け、必要かつ適切な監督を行います。`,
  },
  {
    title: "7. 安全管理措置",
    body: `当社は、個人情報の漏えい・滅失・毀損の防止その他の安全管理のため、組織的・人的・物理的・技術的安全管理措置を講じます。具体的な措置の内容については、お問い合わせ窓口までご連絡ください。`,
  },
  {
    title: "8. Cookieおよびアクセス解析",
    body: `当社ウェブサイトでは、利便性向上や利用状況の把握のため、Cookieを使用する場合があります。ブラウザの設定によりCookieを無効化できますが、一部機能が利用できなくなる場合があります。

アクセスログ（IPアドレス、閲覧ページ、ブラウザ種別等）は、サイトの運営・改善のために利用することがあります。`,
  },
  {
    title: "9. 保有個人データの開示等",
    body: `ご本人から、当社の保有個人データについて、利用目的の通知、開示、訂正・追加・削除、利用停止・消去、第三者提供の停止（以下「開示等」）を求められた場合は、法令に従い、ご本人確認のうえ合理的な期間内に対応します。

開示等のご請求・お問い合わせは、本ポリシー末尾の窓口までご連絡ください。法令により対応できない場合や手数料が必要な場合は、その旨をご説明します。`,
  },
  {
    title: "10. 保存期間",
    body: `個人情報は、利用目的の達成に必要な期間、および法令上保存が義務付けられる期間に限り保有し、不要となった場合は速やかに削除または匿名化します。`,
  },
  {
    title: "11. 未成年の方",
    body: `未成年の方がお問い合わせ・応募等を行う場合は、保護者の同意を得たうえでご利用ください。`,
  },
  {
    title: "12. プライバシーポリシーの改定",
    body: `本ポリシーの内容は、法令の改正や当社の事業内容の変更等に応じて、予告なく改定することがあります。改定後の内容は、本ページに掲載した時点から効力を生じます。重要な変更がある場合は、当社ウェブサイト上でお知らせします。`,
  },
];

export default function PrivacyPolicyPage() {
  const established = "2026年5月25日";
  const revised = "2026年5月25日";

  useEffect(() => {
    document.title = "プライバシーポリシー｜株式会社サワダ電気";
    window.scrollTo(0, 0);
    return () => {
      document.title = "株式会社サワダ電気｜半田市・知多半島の電気工事";
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      <Header variant="subpage" />

      <main className="pt-24 sm:pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-navy transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            トップページへ戻る
          </Link>

          <div className="mb-10 border-l-4 border-brand-blue pl-4">
            <p className="text-[11px] font-bold text-brand-blue tracking-[0.15em]">LEGAL</p>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mt-1">
              プライバシーポリシー
            </h1>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              株式会社サワダ電気（以下「当社」）の個人情報の取扱いについて定めます。
            </p>
            <p className="text-gray-400 text-xs mt-3">
              制定日：{established}　／　最終改定日：{revised}
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 sm:p-10 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-base sm:text-lg font-extrabold text-brand-navy tracking-tight mb-3">
                  {section.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              </section>
            ))}

            <section className="pt-6 border-t border-gray-100">
              <h2 className="text-base sm:text-lg font-extrabold text-brand-navy tracking-tight mb-3">
                13. お問い合わせ窓口
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                個人情報の取扱いに関するご質問・開示等のご請求は、下記までご連絡ください。
              </p>
              <div className="mt-4 p-4 bg-brand-bg rounded border border-gray-100 text-sm text-gray-700 space-y-1">
                <p className="font-bold text-brand-navy">株式会社サワダ電気　個人情報お問い合わせ窓口</p>
                <p>〒475-XXXX 愛知県半田市乙川町XX-XX</p>
                <p>電話：0569-21-XXXX（平日 9:00〜18:00）</p>
                <p>メール：info@sawadadenki.jp</p>
              </div>
            </section>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <BrandLogo imageClassName="h-10 w-auto" showText />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
