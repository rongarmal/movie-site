import {Routes, Route} from 'react-router'
import MainLayout from '../layouts/MainLayout'
import About from '../pages/About'
import HomePage from '../pages/HomePage'
import Movie from '../pages/Movie'


function Router() {
  return (
    <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />}/>
          <Route path="movies" element={<Movie />}/>
          <Route path="about" element={<About />}/>
        </Route>
    </Routes>
  )
}

export default Router