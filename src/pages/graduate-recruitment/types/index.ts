interface PositionsList {
  list: string
}
export interface PositionsType {
  id: string
  title: string
  Image: string
  content: PositionsList[]
}
interface SalaryList {
  list_1: string
  list_2?: string
}
interface SalaryContentType {
  content_1: SalaryList[]
}
export interface SalaryType {
  id: string
  title: string
  Image: string
  content: SalaryContentType[]
}
