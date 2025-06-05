const NavButtons = ({selected, setSelected}) => {
  const NavSelections = ['Home', 'About Us', 'Our Team', 'Events', 'Gallery']

  return (
    <>
      {NavSelections.map((item) => (
        <button
          key={item} 
          onClick={() => setSelected(item)}
          className = {selected === item ? 'text-ggorange px-5 py-0.5 border-1 border-ggorange rounded-2xl' : 'text-ggwhite hover:text-orange-300 px-5 py-0.5 border-1 border-ggwhite hover:border-orange-300 rounded-2xl'}
        >
          {item}
        </button>
      ))}
    </>
  )
}

export default NavButtons