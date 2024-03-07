import { Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'

export function PrivateRoute({ route }) {
  const auth = useAuth()
  const location = useLocation()

  if (auth.user === null) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      {route.element}
      <Routes>
        {route.children.map((child) => (
          <Route key={child.path} path={child.path} element={child.element} />
        ))}
      </Routes>
    </Suspense>
  )
}
