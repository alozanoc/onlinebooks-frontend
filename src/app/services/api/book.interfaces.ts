export interface SearchResponse {
  content: Content[]
  pageable: Pageable
  last: boolean
  totalPages: number
  totalElements: number
  first: boolean
  size: number
  number: number
  sort: Sort2
  numberOfElements: number
  empty: boolean
}

export interface Content {
  id: number
  title: string
  author: string
  genre: any
  description: string
  imageUrl: string
  createdAt: string
  updatedAt: string
  comments: Comment[]
}

export interface Comment {
  id: number
  content: string
  userId: any
  createdAt: string
}

export interface Pageable {
  sort: Sort
  offset: number
  pageNumber: number
  pageSize: number
  paged: boolean
  unpaged: boolean
}

export interface Sort {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

export interface Sort2 {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}
