
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Thoughts from './pages/Thoughts.jsx'
import Experiments from './pages/Experiments.jsx'
import Work from './pages/Work.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {

  return (
    <>

    <Routes>

        {/* Main Layout route */}

      <Route element={ <MainLayout/> }>

          <Route path='/'  element={ <Home/> }/>

          {/* route for Thoughts page */}
          <Route path='/thoughts'   element={ <Thoughts/> }/>


          {/* route for Experiments page */}
          <Route path='/experiments'  element={ <Experiments/> }/>


          {/* route for Work page */}
          <Route path='/work'  element={ <Work/> }/>

      </Route>
    
       {/* 404 page route */}

        <Route path="*"   element={ <NotFound/> }/>
      
    </Routes>
      
    </>
  )
}

export default App
