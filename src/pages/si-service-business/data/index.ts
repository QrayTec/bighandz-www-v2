import { ref } from 'vue'
import { AchievementsType, ImageListType } from '../types/index'
import ExpIcon1 from '@/assets/images/si-service-business/Exp_icon_1.svg'
import ExpIcon2 from '@/assets/images/si-service-business/Exp_icon_2.svg'
import ExpIcon3 from '@/assets/images/si-service-business/Exp_icon_3.svg'
import ExpIcon4 from '@/assets/images/si-service-business/Exp_icon_4.svg'

const AchievementsData = ref<AchievementsType[]>([
  {
    SystemName: '健康保険システム',
    Technology: 'TERASOLUNA、Java',
    Scale: '12人チーム、150人月',
    Remarks: '外部設計・詳細設計・製造：東京、問合対応：東京'
  },
  {
    SystemName: '介護保険システム',
    Technology: '.NET、VC++、PL/SQL',
    Scale: '25人チーム、300人月',
    Remarks: '外部設計：東京、詳細設計・製造：青島'
  },
  {
    SystemName: '簡易保険システム',
    Technology: 'MF COBOL',
    Scale: '40人チーム、480人月',
    Remarks: '概要設計、外部設計：東京、詳細設計・製造：東京　'
  },
  {
    SystemName: '電波監視システム',
    Technology: '.NET、VC++、PL/SQL',
    Scale: '50人チーム、350人月',
    Remarks: '概要設計、外部設計：東京、詳細設計・製造：青島　'
  },
  {
    SystemName: '電子入札システム',
    Technology: 'Spring、Java',
    Scale: '30人チーム、400人月',
    Remarks: '外部設計：東京、詳細設計・製造：青島　'
  },
  {
    SystemName: '製薬会社向け製造販売後調査システム',
    Technology: 'Spring、Java、JQuery',
    Scale: '10人チーム、100人月',
    Remarks: '外部設計：東京、詳細設計・製造：青島　'
  },
  {
    SystemName: '証券システム（開発）',
    Technology: 'Java、COBOL',
    Scale: '46人チーム、600人月',
    Remarks: '外部設計：東京、詳細設計・製造：青島'
  },
  {
    SystemName: '証券システム（運用）',
    Technology: 'Java、COBOL',
    Scale: '25人チーム、LAB契約',
    Remarks: '運用：東京、青島、テスト：東京、青島'
  }
])

const ImageListData = ref<ImageListType[]>([
  {
    Image: ExpIcon1,
    title: 'カスタムソフトウェア開発'
  },
  {
    Image: ExpIcon2,
    title: 'パッケージソフトウェア開発'
  },
  {
    Image: ExpIcon3,
    title: 'Webアプリケーション開発'
  },
  {
    Image: ExpIcon4,
    title: 'スマートフォンアプリケーション開発'
  }
])

export { AchievementsData, ImageListData }
