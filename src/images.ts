// 株式会社サワダ電気 コーポレートサイトアセット
// 差し替えが容易なように、画像パスを一元管理します。

import logoSawadaDenki from "./assets/images/logo-sawada-denki.png";
import heroElectrician from "./assets/images/hero_electrician_1779273052158.png";
import recruitTeam from "./assets/images/recruit_team_1779273084371.png";

export const IMAGES = {
  /** 透過PNGロゴ（ヘッダー・フッター） */
  logo: logoSawadaDenki,
  // ファーストビュー背景（電気工事、作業スタッフ）
  heroBg: heroElectrician,
  
  // 太陽光・通信インフラ
  solarEco: "/src/assets/images/solar_eco_panels_1779273069440.png",
  
  // 採用（笑顔のスタッフ・チーム）
  recruitment: recruitTeam,
  
  // 通信・工場・オフィスLED
  telecomFactory: "/src/assets/images/telecom_factory_1779273103710.png",
  
  // 住宅電気工事・設備
  residential: "/src/assets/images/residential_work_1779273123789.png",
};
