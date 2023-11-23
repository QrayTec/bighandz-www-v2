export interface GartnerCardType {
  BackgroundImage: string
  className: string
  title_1: string
  title_2: string
}
interface ChallengesList {
  list: string
}
interface ManagementList {
  title: string
  list: string
  Color: string
}
export interface ChallengesType {
  Image: string
  content: ChallengesList[]
}
export interface ManagementType {
  Image: string
  content: ManagementList[]
}

export interface AiDeliverType {
  Image: string
  title: string
}
