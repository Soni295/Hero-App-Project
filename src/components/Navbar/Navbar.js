import { useState, useContext } from 'react'
import { Navbar as NavbarBS, Nav } from 'react-bootstrap'

import { Brand } from './Brand'
import { NavbarLink } from './NavBarLink'

import { UserContext } from '../../context/UserContext'
import { SearchForm } from '../SearchForm/SearchForm'

import { PATH } from '../../config/PATH'

import './style.css'

export const Navbar = () => {

  const {session} = useContext(UserContext)
  const [showToggle, setShowToggle] = useState(false)

  if(session.token === null)return <></>

  return(
    <NavbarBS
      fixed="top"
      collapseOnSelect
      className='px-3'
      expanded={showToggle}
      expand="sm"
      bg="dark"
      variant="dark"
    >
      <Brand
        setShowToggle={setShowToggle}
      />

      <NavbarBS.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => setShowToggle(!showToggle)}
      />

      <NavbarBS.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">

          <NavbarLink path={PATH.HOME} setShowToggle={setShowToggle}>
            Home
          </NavbarLink>
        </Nav>

        <SearchForm />

      </NavbarBS.Collapse>
    </NavbarBS>
  )
}
