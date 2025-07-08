import { useMediaQuery } from 'react-responsive'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/home/Layout'
import Hero from './pages/home/Hero'
import HomeContent from './pages/home/HomeContent'
import BlurOne from './bgblurs/BlurOne'
import AboutContent from './pages/about/AboutContent'
import TeamContent from './pages/team/TeamContent'

const App = () => {
  const maxSm = useMediaQuery({ maxWidth: 767 })
  const minMd = useMediaQuery({ minWidth: 768 })
  const maxMd = useMediaQuery({ maxWidth: 1023 })
  const isMobile = useMediaQuery({ maxWidth: 920 })
  const minXl = useMediaQuery({ minWidth: 1280 })
  const minLg = useMediaQuery({ minWidth: 1024 })

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout isMobile={isMobile} maxMd={maxMd}/>}>
          <Route
            index
            element={
              <>
                <BlurOne/>
                <Hero minLg={minLg}/>
                <HomeContent maxSm={maxSm} minXl={minXl}/>
              </>
            }
          />
          <Route
            path='/about'
            element={<AboutContent minXl={minXl} minMd={minMd} minLg={minLg}/>}
          />
          <Route
            path='/team'
            element={<TeamContent/>}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
