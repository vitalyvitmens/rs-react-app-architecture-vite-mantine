import { lazy } from 'react'

const Category = lazy(() =>
  import('./Category.jsx').then((module) => ({
    default: module.Category,
  })),
)

export default Category
