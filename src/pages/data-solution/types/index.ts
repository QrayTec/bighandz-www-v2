interface SolutionList {
  list_1: string
  list_2?: string
  list_3?: string
}

export interface SolutionType {
  id: string
  title: string
  Image: string
  content: SolutionList[]
}

export interface CasesType {
  Segmentation: string
  RFM: string
  Description: string
  Market: string
}

export interface AIApplicationAreaType {
  list_1: string
  list_2: string
}

export interface EPRType {
  Image: string
  title: string
}
