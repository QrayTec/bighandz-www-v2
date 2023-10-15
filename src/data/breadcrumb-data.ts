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
  }
}
