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

export interface TechnologyType {
  Image: string
  title: string
  list: string
}
export interface EPRType {
  Image: string
  title: string
}
