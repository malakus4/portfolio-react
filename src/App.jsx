
import { Route, Routes } from 'react-router-dom'
import Hometest from './pages/Hometest.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Experiment from './components/sections/Experiment.jsx'

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

      {/* route for Experiments page */}
      <Route element={ <MainLayout/> }>
        <Route path='/experiments' 
          element={ <Experiment/> }/>
      </Route>
    </Routes>
      
    </>
  )
}

export default App
