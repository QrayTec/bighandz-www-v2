import { ref } from 'vue'

import { CompaniesType, BusinessCompaniesType } from '../types/index'
import BeiJIn from '@/assets/images/Business-Companies/BeiJin.svg'
import QinDaoDaLian from '@/assets/images/Business-Companies/QinDaoDaLian.svg'
import Saif from '@/assets/images/Business-Companies/Saif.svg'
import XinHuaJin from '@/assets/images/Business-Companies/XinHuaJin.svg'
import Inquiry from '@/assets/images/Business-Companies/Inquiry.svg'
import BusinessIcon1 from '@/assets/images/Business-Companies/Business_icon_1_1.svg'
import BusinessIcon2 from '@/assets/images/Business-Companies/Business_icon_1_2.svg'
import BusinessIcon3 from '@/assets/images/Business-Companies/Business_icon_2_1.svg'
import BusinessIcon4 from '@/assets/images/Business-Companies/Business_icon_2_2.svg'
import BusinessIcon5 from '@/assets/images/Business-Companies/Business_icon_3_1.svg'
import BusinessIcon6 from '@/assets/images/Business-Companies/Business_icon_3_2.svg'
import BusinessIcon7 from '@/assets/images/Business-Companies/Business_icon_4_1.svg'
import BusinessIcon8 from '@/assets/images/Business-Companies/Business_icon_4_2.svg'
import BusinessIcon9 from '@/assets/images/Business-Companies/Business_icon_5_1.svg'
import BusinessIcon10 from '@/assets/images/Business-Companies/Business_icon_5_2.svg'

const CompaniesData1 = ref<CompaniesType[]>([
  {
    MiniTitle_1: '北京',
    BigTitle: '北京大手計算機技術有限公司(2002)',
    icon: BeiJIn,
    content: [
      { list: 'オフショア開発センター' },
      { list: 'ITシステム開発・流通' },
      { list: 'パッケージ現地化' }
    ]
  },
  {
    MiniTitle_1: '青島',
    BigTitle: '青島大手海恩信息技術有限公司(2006)',
    icon: QinDaoDaLian,
    content: [
      { list: 'オフショア開発センター' },
      { list: 'システム開発：証券・公共・医療' },
      { list: '運用・BPO' },
      { list: 'イノベーションセンター' }
    ]
  },
  {
    MiniTitle_1: '諮詢',
    BigTitle: '青島大手商業諮詢有限公司(2015)',
    icon: Inquiry,
    content: [
      { list: 'コンサルティング' },
      { list: 'スマートシティ・スマート農業' },
      { list: '中国マーケット調査' },
      { list: '日本の技術移転・投資' }
    ]
  },
  {
    MiniTitle_1: '康復',
    BigTitle: '新華錦大手康復産業管理公司(2017)',
    icon: XinHuaJin,
    content: [
      { list: 'ヘルスケア' },
      { list: 'リハビリステーション' },
      { list: '老人ホーム管理システム' },
      { list: 'Intelligent Community' }
    ]
  },

  {
    MiniTitle_1: 'サイフ',
    BigTitle: 'サイフ株式会社(2020)',
    icon: Saif,
    content: [
      { list: '商品企画・販売' },
      { list: 'インバウンド商品・越境EC' },
      { list: 'デジタルマーケティング' },
      { list: 'ライブコマース・SNS' }
    ]
  },
  {
    MiniTitle_1: '大連',
    BigTitle: '大連大手経緯信息技術有限公司(2021)',
    icon: QinDaoDaLian,
    content: [{ list: 'オフショア開発センター' }, { list: 'POSシステム開発' }]
  }
])

const CompaniesData2 = ref<BusinessCompaniesType[]>([
  {
    Title: 'ITシステム開発',
    Icon1: BusinessIcon1,
    Icon2: BusinessIcon2,
    content: [
      { list: '証券/金融' },
      { list: '官庁/公共' },
      { list: '製造/流通' },
      { list: '医療/製薬/養老' },
      { list: 'ビッグデータ' },
      { list: 'DX（AI/データ分析）' },
      { list: 'ERP' }
    ]
  },
  {
    Title: 'ヘルスケア',
    Icon1: BusinessIcon3,
    Icon2: BusinessIcon4,
    content: [
      { list: 'リハビリステーション' },
      { list: '老人ホーム管理システム' },
      { list: 'スマートコミュニティ' }
    ]
  },
  {
    Title: 'セルフサービス端末',
    Icon1: BusinessIcon5,
    Icon2: BusinessIcon6,
    content: [
      { list: '知恵点' },
      { list: 'IPS' },
      { list: 'スマト物流' },
      { list: 'スマートウォッチ' },
      { list: '自動券売機' },
      { list: '自動販売機' },
      { list: '無人店舗' }
    ]
  },
  {
    Title: '商品企画・販売',
    Icon1: BusinessIcon7,
    Icon2: BusinessIcon8,
    content: [
      { list: 'インバウンド商品' },
      { list: 'デジタルマーケティング' },
      { list: '越境EC' }
    ]
  },
  {
    Title: 'コンサルティング',
    Icon1: BusinessIcon9,
    Icon2: BusinessIcon10,
    content: [
      { list: '日中間の新規ビジネス開拓' },
      { list: '人材紹介' },
      { list: '顧客紹介' }
    ]
  }
])

export { CompaniesData1, CompaniesData2 }
