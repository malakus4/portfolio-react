
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Work from './pages/Work.jsx'
import WorkDetail from './pages/WorkDetail.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {

  return (
    <>

    <Routes>

        {/* Main Layout route */}

      <Route element={ <MainLayout/> }>

          <Route path='/'  element={ <Home/> }/>

          {/* route for Portfolio page 
            same as Home page
          */}
                   
          {/* route for Work page */}
          <Route path='/work'  element={ <Work/> }/>
          <Route path='/work/:slug'  element={ <WorkDetail/> }/>
          
           {/* route for About page */}
          <Route path='/about'  element={ <About/> }/>


      </Route>
    
       {/* 404 page route */}

        <Route path="*"   element={ <NotFound/> }/>
      
    </Routes>
      
    </>
  )
}

export default App
