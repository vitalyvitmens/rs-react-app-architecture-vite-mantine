import { AuthProvider } from './context/AuthProvider'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import styles from './app.module.css'

export const App = () => {
  return (
    <div className={styles.App}>
      <HashRouter>
        <AuthProvider>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <ErrorBoundary>
                    {route.children ? (
                      <PrivateRoute route={route} />
                    ) : (
                      route.element
                    )}
                  </ErrorBoundary>
                }
              />
            ))}
          </Routes>
        </AuthProvider>
      </HashRouter>
    </div>
  )
}
