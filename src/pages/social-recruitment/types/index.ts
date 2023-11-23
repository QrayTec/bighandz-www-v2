interface SalaryList {
  list_1: string
  flag?: boolean
}
export interface SalaryType {
  content: SalaryList[]
}

export interface SalaryType2 {
  title?: string
  content: SalaryList[]
}
