import { Link } from 'react-router-dom'
import { PATH } from '../../config/PATH'

export const Brand = ({setShowToggle}) => (
  <Link
    className='navbar-brand'
    onClick={() => setShowToggle(false)}
    to={PATH.HOME}
  >
    Project A
  </Link>
)
