import { lazy } from 'react'

const NotFoundMantine = lazy(() =>
  import('./NotFoundMantine.jsx').then((module) => ({
    default: module.NotFoundMantine,
  })),
)

export default NotFoundMantine
