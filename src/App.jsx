// import './App.css'
// import Header from './components/sections/Header.jsx'
// import Banner from './components/sections/Banner.js'
// import Nav from './components/sections/Nav.jsx'
// import About from './components/sections/About.js'
// import Thoughts from './components/sections/Thoughts.jsx'
// import Experiment from './components/sections/Experiment.js'
// import Footer from './components/sections/Footer.jsx'
import { Route, Routes } from 'react-router-dom'
import Hometest from './pages/Hometest.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'

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
    </Routes>
      
    </>
  )
}

export default App
