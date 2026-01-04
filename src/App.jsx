
import { Route, Routes } from 'react-router-dom'
import Hometest from './pages/Hometest.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Thoughts from './pages/Thoughts.jsx'
import ExperimentPreview from './components/sections/ExperimentPreview.jsx'

function App() {

  return (
    <>

    <Routes>

        {/* Main Layout route */}

      <Route element={ <MainLayout/> }>
        <Route path='/' 
          element={ <Home/> }/>
      </Route>
     


        {/* Test home page */}

       {/* Main Layout route */}
      <Route element={<MainLayout/>}>
      <Route path='/hometest' element={<Hometest/>}/>
      
      </Route>



      {/* route for Thoughts page */}

      <Route element={ <MainLayout/> }>
        <Route path='/thoughts' 
          element={ <Thoughts/> }/>
      </Route>

      {/* route for Experiments page */}
      {/* route for Work page */}
      <Route element={ <MainLayout/> }>
        <Route path='/experiments' 
          element={ <ExperimentPreview/> }/>
      </Route>
    </Routes>
      
    </>
  )
}

export default App
