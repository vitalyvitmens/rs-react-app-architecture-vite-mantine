import { lazy } from 'react'

const Home = lazy(() =>
  import('./Home.jsx').then((module) => ({
    default: module.Home,
  })),
)

export default Home
