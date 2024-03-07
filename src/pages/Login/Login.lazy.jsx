import { lazy } from 'react'

const Login = lazy(() =>
  import('./Login.jsx').then((module) => ({
    default: module.Login,
  })),
)

export default Login
