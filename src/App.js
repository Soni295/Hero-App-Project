import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route, allRoutes } from './config/allRoutes'
import { UserProvider } from './context/UserContext'
import { MyTeamProvider } from './context/MyTeamContext'
import { Navbar } from './components/Navbar/Navbar'
import './App.css'

const Routers = () => (
  <Router>
    <Navbar />
    <Switch>
      {allRoutes.map( route =>
        <Route {...route} />
      )}
    </Switch>
  </Router>
)

export const App = () => (
  <UserProvider>
    <MyTeamProvider>
      <Routers />
    </MyTeamProvider>
  </UserProvider>
)
