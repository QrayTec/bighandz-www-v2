interface industryList {
  ClassName: string
  list_1: string
  list_2: string
}
export interface industryType {
  title: string
  Image: string
  content: industryList[]
}
interface ExperienceList {
  list: string
}
export interface ExperienceType {
  title: string
  Image: string
  content: ExperienceList[]
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
  Remarks: RemarksList[]
}
