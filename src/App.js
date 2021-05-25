import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route, allRoutes } from './config/allRoutes'
import { UserProvider } from './context/UserContext'
import { MyTeamProvider } from './context/MyTeamContext'
import { Navbar } from './components/Navbar/Navbar'
import './App.css'

const Routers = () => (
  <MyTeamProvider>
    <Switch>
      {allRoutes.map( route =>
        <Route {...route} />
      )}
    </Switch>
  </MyTeamProvider>
)

export const App = () => (
  <Router>
    <UserProvider>
      <Navbar />
      <Routers />
    </UserProvider>
  </Router>
)
