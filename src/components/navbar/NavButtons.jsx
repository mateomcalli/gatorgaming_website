import { NavLink } from 'react-router-dom'

const NavButtons = () => {
  const NavSelections = [
    {name: 'Home', path: '/'},
    {name: 'About Us', path: '/about'},
    {name: 'Our Team', path: '/team'},
    {name: 'Events', path: '/events'},
    {name: 'Gallery', path: '/gallery'}
  ]

  return (
    <>
      {NavSelections.map((item) => (
        <NavLink 
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            isActive 
            ? 'text-ggorange px-5 py-0.5 border-1 border-ggorange rounded-2xl'
            : 'text-ggwhite px-5 py-0.5 border-1 border-ggwhite rounded-2xl fade-bg-orange hover:text-white'
          }>
          <button className='cursor-pointer'>
            {item.name}
          </button>
        </NavLink>
      ))}
    </>
  )
}

export default NavButtons