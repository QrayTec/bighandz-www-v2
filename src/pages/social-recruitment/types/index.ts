export interface List {
  list: string
}

export interface ListType {
  title?: string
  list: string
}

export interface TableType {
  title: string
  content: ListType[]
}
