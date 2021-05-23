import { useContext } from 'react'
import { Route as RouteReact, Redirect } from 'react-router-dom'

import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { SearchPage } from '../pages/SearchPage'

import { UserContext } from '../context/UserContext'

import { PATH } from './PATH'

export const allRoutes = [
  {
    path: PATH.LOGIN,
    key: PATH.LOGIN,
    Component: LoginPage,
    exact: true
  },
  {
    path: PATH.HOME,
    key: PATH.HOME,
    Component: HomePage,
    exact: true,
    autho: true
  },
  {
    path: PATH.SEARCH,
    key: PATH.SEARCH,
    Component: SearchPage,
    autho: true
  },
  {
    path: PATH.NOTFOUNDPAGE,
    key: PATH.NOTFOUNDPAGE,
    Component: NotFoundPage,
    autho: true,
    exact: true
  },
]

export const Route = route => {
  const {session} = useContext(UserContext)

  if(route.autho && !session.token)
    return <Redirect to={PATH.LOGIN} />

  if(session.token && route.path === PATH.LOGIN)
    return <Redirect to={PATH.HOME} />

  return (
    <RouteReact
      path={route.path}
      key={route.path}
      render={
        props =>
        <route.Component {...props}/>
      }
    />
  )
}
