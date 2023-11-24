export interface BreadcrumbPageData {
  path: string
  Parent_title: string
  name?: string
  checked: number
  MainPage: boolean
}

export const json: {
  [key: string]: string | BreadcrumbPageData
} = {
  '/': {
    path: '/',
    Parent_title: '首页',
    name: '首页',
    checked: 0,
    MainPage: false
  },
  '/message-from-president': {
    path: '/message-from-president',
    Parent_title: '企業情報',
    name: '社長挨拶',
    checked: 1,
    MainPage: true
  },
  '/company-profile': {
    path: '/company-profile',
    Parent_title: '企業情報',
    name: '会社概要',
    checked: 1,
    MainPage: true
  },
  '/corporate-philosophy-management-policy': {
    path: '/corporate-philosophy-management-policy',
    Parent_title: '企業情報',
    name: '企業理念経営方針',
    checked: 1,
    MainPage: true
  },
  '/event-information': {
    path: '/event-information',
    Parent_title: '企業情報',
    name: 'イベント情報',
    checked: 1,
    MainPage: true
  },
  '/healthcare-business': {
    path: '/healthcare-business',
    Parent_title: '事業概要',
    name: 'ヘルスケア事業',
    checked: 2,
    MainPage: true
  },
  '/si-service-business': {
    path: '/si-service-business',
    Parent_title: '事業概要',
    name: 'SIサービス事業',
    checked: 2,
    MainPage: true
  },
  '/data-solution': {
    path: '/data-solution',
    Parent_title: '事業概要',
    name: 'データソリューション',
    checked: 2,
    MainPage: true
  },
  '/infrastructure-business': {
    path: '/infrastructure-business',
    Parent_title: '事業概要',
    name: 'インフラ事業',
    checked: 2,
    MainPage: true
  },
  '/logistics-business': {
    path: '/logistics-business',
    Parent_title: '事業概要',
    name: '物流事業',
    checked: 2,
    MainPage: true
  },
  '/adoption-intelligence': {
    path: '/adoption-intelligence',
    Parent_title: '採用情報',
    name: '採用情報',
    checked: 3,
    MainPage: false
  },
  '/company-staff-observation': {
    path: '/company-staff-observation',
    Parent_title: '採用情報',
    name: 'MOVIE',
    checked: 3,
    MainPage: true
  },
  '/graduate-recruitment': {
    path: '/graduate-recruitment',
    Parent_title: '採用情報',
    name: '新卒採用',
    checked: 3,
    MainPage: true
  },
  '/social-recruitment': {
    path: '/social-recruitment',
    Parent_title: '採用情報',
    name: 'キャリア採用',
    checked: 3,
    MainPage: true
  },
  '/recruitment-process': {
    path: '/recruitment-process',
    Parent_title: '採用情報',
    name: '採用の流れ',
    checked: 3,
    MainPage: true
  },
  '/faq': {
    path: '/FAQ',
    Parent_title: '採用情報',
    name: 'FAQよくあるご質問',
    checked: 3,
    MainPage: true
  },
  '/map': {
    path: '/map',
    Parent_title: 'アクセスマップ',
    name: 'アクセスマップ',
    checked: 4,
    MainPage: false
  }
}
