import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Intro from './Pages/Intro/Intro';
import Portfolio from './Pages/Portfolio/Portfolio';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import AllTools from './Pages/Tools/AllTools';
function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Intro></Intro>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/allTools' element={<AllTools></AllTools>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
