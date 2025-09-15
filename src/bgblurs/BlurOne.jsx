const BlurOne = () => {
  return (
    <div className='select-none pointer-events-none h-[120vh] absolute inset-0 overflow-hidden z-1'>
      <img
        src='/home/hero-bg.png'
        alt='Blurry background asset'
        className='min-w-[400px] w-full h-full object-cover object-center'
      />
    </div>
  )
}
export default BlurOne;
