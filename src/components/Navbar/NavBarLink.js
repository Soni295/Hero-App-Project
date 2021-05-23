import { Link } from 'react-router-dom'

export const NavbarLink = ({children, path, setShowToggle}) => (
  <Link
    className="nav-link"
    onClick={() => setShowToggle(false)}
    to={path}
  >
    {children}
  </Link>
)

