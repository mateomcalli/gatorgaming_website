const Breakpoints = () => {
  return (
    <div className='pointer-events-none fixed inset-0 z-[9999]'>
      {/* sm: 640px */}
      <div className='absolute top-0 bottom-0 left-[640px] w-px bg-red-500 opacity-50' />

      {/* md: 768px */}
      <div className='absolute top-0 bottom-0 left-[768px] w-px bg-orange-500 opacity-50' />

      {/* lg: 1024px */}
      <div className='absolute top-0 bottom-0 left-[1024px] w-px bg-yellow-500 opacity-50' />

      {/* xl: 1280px */}
      <div className='absolute top-0 bottom-0 left-[1280px] w-px bg-green-500 opacity-50' />

      {/* 2xl: 1536px */}
      <div className='absolute top-0 bottom-0 left-[1536px] w-px bg-blue-500 opacity-50' />
    </div>
  );
};

export default Breakpoints