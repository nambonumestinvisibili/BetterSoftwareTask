import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

export const HOME_ROUTE = '/home'
export const VIDEO_ROUTE = '/video'

const Home = lazy(() => import('../../views/Home/HomeView'))
const Video = lazy(() => import('../../views/Video/VideoView'))

const AvailableRoutes = () => {
  return (
      <Routes>
        <Route exact path={HOME_ROUTE} element={<Home/>} />
        <Route exact path={VIDEO_ROUTE + "/:id"} element={<Video/>} />
        <Route path="*" exact element={<Home />}/>
      </Routes>
  )
}

export default AvailableRoutes