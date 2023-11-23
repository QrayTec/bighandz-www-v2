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
interface ChallengesList {
  list: string
}
export interface ChallengesType {
  Image: string
  content: ChallengesList[]
}
interface ManagementList {
  title: string
  list: string
  Color: string
}

export interface ManagementType {
  Image: string
  content: ManagementList[]
}

export interface AiDeliverType {
  Image: string
  title: string
}

export interface ListType {
  list: string
}
