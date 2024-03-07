import Login from './pages/Login/Login.lazy'
import Navigation from './layout/Navigation/Navigation.lazy'
import Home from './pages/Home/Home.lazy'
import Category from './pages/Category/Category.lazy'
import Detail from './pages/Detail/Detail.lazy'
import NotFoundMantine from './pages/NotFoundMantine/NotFoundMantine.lazy'

export const routes = [
  {
    path: '/*',
    element: <Navigation />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/:category', element: <Category /> },
      { path: '/:category/:id', element: <Detail /> },
      { path: '*', element: <NotFoundMantine /> },
    ],
  },
  { path: '/login', element: <Login /> },
]
