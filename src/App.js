import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route, allRoutes } from './config/allRoutes'
import { UserProvider } from './context/UserContext'
import './App.css'

export const App = () => {
  return(
    <UserProvider>
      <Router>
        <Switch>
          {allRoutes.map( route =>
            <Route key={route.path} {...route} />
          )}
        </Switch>
      </Router>
    </UserProvider>
  )
}
