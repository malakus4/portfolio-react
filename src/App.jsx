
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Thoughts from './pages/Thoughts.jsx'
import Experiments from './pages/Experiments.jsx'
import Work from './pages/Work.jsx'

function App() {

  return (
    <>

    <Routes>

        {/* Main Layout route */}

      <Route element={ <MainLayout/> }>
        <Route path='/' 
          element={ <Home/> }/>
      </Route>
    


      {/* route for Thoughts page */}

      <Route element={ <MainLayout/> }>
        <Route path='/thoughts' 
          element={ <Thoughts/> }/>
      </Route>


      {/* route for Experiments page */}
      <Route element={ <MainLayout/> }>
        <Route path='/experiments'
          element={ <Experiments/> }/>
      </Route>

      {/* route for Work page */}
      <Route element={ <MainLayout/> }>
        <Route path='/work'
          element={ <Work/> }/>
      </Route>
      
    </Routes>
      
    </>
  )
}

export default App
