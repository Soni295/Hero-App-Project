import { useContext } from 'react'
import { Route as RouteReact, Redirect } from 'react-router-dom'

import { UserContext } from '../context/UserContext'

import { LoginPage } from '../pages/LoginPage'
import { Home } from '../pages/Home'
import { NotFoundPage } from '../pages/NotFoundPage'

import { PATH } from './PATH'

export const allRoutes = [
  {
    path: PATH.LOGIN,
    Component: LoginPage,
    exact: true
  },
  {
    path: PATH.HOME,
    Component: Home,
    exact: true,
    autho: true
  },
  {
    path: PATH.NOTFOUNDPAGE,
    Component: NotFoundPage,
    exact: true
  },
]

export const Route = route => {
  const {session} = useContext(UserContext)

  if(route.autho && !session.token)
    return <Redirect to={PATH.LOGIN} />

  if(session.token && route.path == PATH.LOGIN)
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
