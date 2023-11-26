// 子页标题的type
// bold文字加粗
// Type 样式1 样式2
export interface SubPageTitleType {
  TitleCn_1: string
  TitleCn_2: string
  TitleEn: string
  ImgSrc: string
  bold: number
  type: number
}
// 页内导航的type
export interface PageNavType {
  id: number
  anchor: string
  anchor_title: string
}

export interface PageNavStyleType {
  type: number
}

export interface StepsType {
  id: number
  subheading: string
}
export interface SolutionType {
  title: string
  Image: string
  content: { list: string }[]
}
export interface NavLink {
  id: number
  title: string
  href: string
}

export interface MenuItems {
  id: number
  title: string
  href: string
  align: string
}
