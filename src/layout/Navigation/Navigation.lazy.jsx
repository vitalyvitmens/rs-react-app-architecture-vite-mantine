import { lazy } from 'react'

const Navigation = lazy(() =>
  import('./Navigation.jsx').then((module) => ({
    default: module.Navigation,
  })),
)

export default Navigation
