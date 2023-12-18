export interface BusinessItemType {
  background_image: string
  title_1: string
  title_2?: string
  title_icon: string
  info_content_1: string
  info_content_2: string
  link: string
  style: string
}

export interface ListType {
  list: string
}

export interface BusinessCompaniesType {
  Icon1: string
  Icon2: string
  Title: string
  content: ListType[]
}

export interface CompaniesType {
  MiniTitle_1: string
  MiniTitle_2?: string
  icon: string
  BigTitle: string
  BigTitle_2?: string
  content: ListType[]
}
export interface CompaniesType2 {
  MiniTitle_1: string
  MiniTitle_2?: string
  BigYear?: string
  year: string
  icon: string
  icon2: string
  BigTitle: string
  BigTitle_2?: string
  content: ListType[]
}
