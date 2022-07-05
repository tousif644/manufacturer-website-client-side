import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import RequireAuth from './Authentication/RequireAuth';
import Home from './Pages/Home/Home';
import Intro from './Pages/Intro/Intro';
import Portfolio from './Pages/Portfolio/Portfolio';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import AllTools from './Pages/Tools/AllTools';
import ToolsDetails from './Pages/Tools/ToolsDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartItems from './Pages/Cart/CartItems';


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Intro></Intro>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/allTools' element={<RequireAuth>
          <AllTools></AllTools>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/tools-details/:serviceId' element={<RequireAuth>
          <ToolsDetails></ToolsDetails>
        </RequireAuth>}></Route>
        <Route path="/cart-items" element={<RequireAuth>
          <CartItems></CartItems>
        </RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />

    </div>
  )
}

export default App
