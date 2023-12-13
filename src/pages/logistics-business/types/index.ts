export interface GartnerCardType {
  BackgroundImage: string
  className: string
  title_1: string
  title_2: string
}
export interface GartnerCardDataType {
  type: string
  data: GartnerCardType[]
}
export interface ChallengesList {
  list: string
}
export interface ChallengesType {
  Image: string
  content: ChallengesList[]
}
interface ManagementList {
  list: string
}

export interface ManagementType {
  title: string
  title_2?: string
  color: string
  borderColor: string
  width: string
  content: ManagementList[]
}

export interface AiDeliverType {
  Image: string
  title: string
}

export interface ListType {
  list: string
}
