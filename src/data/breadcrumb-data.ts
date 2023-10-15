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
  '/Related_Company': {
    path: '/Related_Company',
    Parent_title: 'About Us',
    name: 'Related Company'
  },
  '/Company_Introduction_Development_Process': {
    path: '/Company_Introduction_Development_Process',
    Parent_title: 'About Us',
    name: 'Company Introduction and Development Process'
  }
}
