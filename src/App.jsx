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
import Dashboard from './Pages/Dashboard/Dashboard';
import ShowCartItems from './Pages/Cart/ShowCartItems';
import Review from './Pages/Dashboard/Review';
import CartItems from './Pages/Cart/CartItems';
import Blogs from './Pages/Blogs/Blogs';
import BlogContent from './Pages/Blogs/BlogContent';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Authentication/RequireAdmin';
import AllOrders from './Pages/Dashboard/AllOrders';
import Payment from './Pages/Dashboard/Payment';
import PaymentHistory from './Pages/Dashboard/PaymentHistory';
import AddItem from './Pages/Dashboard/AddItem';
import ManageTools from './Pages/Dashboard/ManageTools';


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Intro></Intro>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/allTools' element={<AllTools></AllTools>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/tools-details/:serviceId' element={<RequireAuth>
          <ToolsDetails></ToolsDetails>
        </RequireAuth>}></Route>
        <Route path='/blogs' element={<BlogContent></BlogContent>}></Route>

        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<CartItems></CartItems>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='payment-history' element={<PaymentHistory></PaymentHistory>}></Route>
          <Route path='users' element={<RequireAdmin>
            <AllUsers></AllUsers>
          </RequireAdmin>}></Route>
          <Route path='orders' element={<RequireAdmin>
            <AllOrders></AllOrders>
          </RequireAdmin>}></Route>
          <Route path='add-item' element={<RequireAdmin>
            <AddItem></AddItem>
          </RequireAdmin>}></Route>
          <Route path='manage-tools/' element={<RequireAdmin>
            <ManageTools></ManageTools>
          </RequireAdmin>}></Route>
        </Route>
      </Routes>
      <ToastContainer />

    </div>
  )
}

export default App
