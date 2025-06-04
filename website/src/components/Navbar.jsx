const Navbar = () => {
  return (
    <div className="fixed flex justify-between items-center w-screen top-0 bg-black z-10 h-20 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="flex-shrink-0">
        <img className="w-16" src="https://i.imgur.com/n2RSSOQ.png"></img>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 sm:gap-10 md:gap-14 lg:gap-18">
        <button className="text-white">Home</button>
        <button className="text-white">About Us</button>
        <button className="text-white">Our Team</button>
        <button className="text-white">Events</button>
        <button className="text-white">Gallery</button>
      </div>
    </div>
  )
}

export default Navbar