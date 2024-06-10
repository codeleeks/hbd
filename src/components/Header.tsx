import { NavLink } from 'react-router-dom'

interface HeaderProps {}

// home, gift, letters, photo, video
const Header = (_: HeaderProps) => {
  return (
    <header>
      <h1 className='header-title'>🎉희주야 생일 축하해~🎉</h1>
      <nav className='header-nav inner'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='gift'>Gift</NavLink>
        <NavLink to='letter'>Letter</NavLink>
        <NavLink to='photo'>Photo</NavLink>
        <NavLink to='video'>Video</NavLink>
      </nav>
    </header>
  )
}

export default Header
