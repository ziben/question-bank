import type { User } from "."

export interface TagCategory {
  id: number
  name: string
  description?: string | null
  code: string
  allowMultiple: boolean
  sortOrder: number
  tags: Tag[]
  createdAt: Date
  updatedAt: Date
  createdBy?: User | null
  createdById?: number | null
  updatedBy?: User | null
  updatedById?: number | null
}

export interface Tag {
  id: number
  name: string
  code: string
  description?: string | null
  sortOrder: number
  category: TagCategory
  categoryId: number
  parent?: Tag | null
  parentId?: number | null
  children: Tag[]
  createdAt: Date
  updatedAt: Date
  createdBy?: User | null
  createdById?: number | null
  updatedBy?: User | null
  updatedById?: number | null
}

export interface QuestionTag {
  id: number
  questionId: number
  tagId: number
  tag: Tag
}
