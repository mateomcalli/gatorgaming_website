import { LuAlignJustify } from 'react-icons/lu'

const MobileNavbar = () => {
  return (
    <div className="px-6 border-b-1 border-[#2e2e2d] fixed justify-between items-center w-screen top-0 flex h-20 bg-ggbg font-display z-10">
      <div className="w-fit flex-shrink-0">
        <img
          onClick={() => setSelected('Home')}
          className="w-16"
          src="https://i.imgur.com/n2RSSOQ.png"
        ></img>
      </div>
      <div className="w-fit text-3xl flex justify-end gap-4">
        <LuAlignJustify/>
      </div>
    </div>
  )
}

export default MobileNavbar