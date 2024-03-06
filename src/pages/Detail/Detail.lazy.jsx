import { lazy } from 'react'

const Detail = lazy(() =>
  import('./Detail.jsx').then((module) => ({
    default: module.Detail,
  })),
)

export default Detail
