interface industryList {
  ClassName: string
  list_1: string
  list_2: string
}
export interface industryType {
  title: string
  en_title: string
  Image: string
  content: industryList[]
}
export interface ExperienceList {
  list: string
}
interface RemarksList {
  list_1: string
  list_2?: string
  list_3?: string
  list_4?: string
}
export interface AchievementsType {
  SystemName: string
  Technology: string
  Scale: string
  Remarks: string
}

export interface ImageListType {
  Image: string
  title: string
}
