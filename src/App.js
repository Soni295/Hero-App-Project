import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route, allRoutes } from './config/allRoutes'
import { UserProvider } from './context/UserContext'
import { Navbar } from './components/Navbar/Navbar'
import './App.css'

export const App = () => (
  <UserProvider>
    <Router>
      <Navbar />
      <Switch>
        {allRoutes.map( route =>
          <Route {...route} />
        )}
      </Switch>
    </Router>
  </UserProvider>
)
