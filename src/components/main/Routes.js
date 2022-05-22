import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const preparePath = suffix => `${suffix}`

const HOME_ROUTE = preparePath('home')
const VIDEO_ROUTE = preparePath('video')

const Home = lazy(() => import('../../views/Home/HomeView'))
const Video = lazy(() => import('../../views/Video/VideoView'))

const AvailableRoutes = () => {
  return (
      <Routes>
        <Route exact path={HOME_ROUTE} element={<Home/>} />
        <Route exact path={VIDEO_ROUTE} element={<Video/>} />
        <Route path="*" exact element={<Home />}/>
      </Routes>
  )
}

export default AvailableRoutes