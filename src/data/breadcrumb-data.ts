export interface BreadcrumbPageData {
  path: string
  Parent_title: string
  name?: string
}

export const json: {
  [key: string]: string | BreadcrumbPageData
} = {
  '/': 'Home',
  '/message-from-president': {
    path: '/message-from-president',
    Parent_title: '企業情報',
    name: '社長挨拶'
  },
  '/company-profile': {
    path: '/company-profile',
    Parent_title: '企業情報',
    name: '会社概要'
  },
  '/corporate-philosophy-management-policy': {
    path: '/corporate-philosophy-management-policy',
    Parent_title: '企業情報',
    name: '企業理念経営方針'
  },
  '/event-information': {
    path: '/event-information',
    Parent_title: '企業情報',
    name: 'イベント情報'
  },
  '/healthcare-business': {
    path: '/healthcare-business',
    Parent_title: '事業概要',
    name: 'ヘルスケア事業'
  },
  '/si-service-business': {
    path: '/si-service-business',
    Parent_title: '事業概要',
    name: 'Siサービス事業'
  },
  '/data-solution': {
    path: '/data-solution',
    Parent_title: '事業概要',
    name: 'データソリューション'
  },
  '/infrastructure-business': {
    path: '/infrastructure-business',
    Parent_title: '事業概要',
    name: 'インフラ事業'
  },
  '/logistics-business': {
    path: '/logistics-business',
    Parent_title: '事業概要',
    name: '物流事業'
  },
  '/company-staff-observation': {
    path: '/company-staff-observation',
    Parent_title: '採用情報',
    name: 'MOVIE'
  },
  '/recruitment-process': {
    path: '/recruitment-process',
    Parent_title: '採用情報',
    name: '採用の流れ'
  },
  '/faq': {
    path: '/FAQ',
    Parent_title: '採用情報',
    name: 'FAQよくあるご質問'
  }
}
