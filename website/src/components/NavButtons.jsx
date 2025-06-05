const NavButtons = ({selected, setSelected}) => {
  const NavSelections = ['Home', 'About Us', 'Our Team', 'Events', 'Gallery']

  return (
    <>
      {NavSelections.map((item) => (
        <button
          key={item} 
          onClick={() => setSelected(item)}
          className = {selected === item ? 'text-ggorange px-5 py-0.5 border-1 border-ggorange rounded-2xl' : 'text-ggwhite fade-orange px-5 py-0.5 border-1 border-ggwhite hover:border-ggorange rounded-2xl'}
        >
          {item}
        </button>
      ))}
    </>
  )
}

export default NavButtons