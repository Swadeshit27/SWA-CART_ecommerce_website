import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Login from './Pages/User Auth/Log in'
import Signup from './Pages/User Auth/Signup'
import ForgetPassword from './Pages/User Auth/ForgetPassword'
import Error from './Pages/Error'
import Footer from './Components/Footer'
import Cart from './Pages/Cart'
import OrderHistory from './Pages/OrderHistory'
import PaymentSuccess from './Pages/PaymentSuccess'
import PrivateRoute from './Components/PrivateRoute'
import UserProfile from './Pages/UserProfile'
import PublicRoute from './Components/PublicRoute'
import WatchList from './Pages/WatchList'
// import OTPVerification from './Pages/User Auth/OtpVerification'
import Address from './Pages/Address'
// import AdminLogin from './Pages/User Auth/AdminLogin'
// import AddProducts from './Pages/AddProducts'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-white_700 dark:bg-black_700'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<PrivateRoute> <Home /></PrivateRoute>} />
        <Route exact path='/cart' element={<PrivateRoute> <Cart /></PrivateRoute>} />
        <Route exact path='/watch' element={<PrivateRoute> <WatchList /></PrivateRoute>} />
        <Route exact path='/history' element={<PrivateRoute> <OrderHistory /></PrivateRoute>} />
        <Route exact path='/address' element={<PrivateRoute> <Address /></PrivateRoute>} />
        <Route exact path='/profile' element={<PrivateRoute> <UserProfile /></PrivateRoute>} />
{/*         <Route exact path='/addProducts' element={<AddProducts />} /> */}

{/*         <Route exact path='/admin' element={<PublicRoute><AdminLogin /></PublicRoute>} /> */}
        <Route exact path='/login' element={<PublicRoute><Login /></PublicRoute>} />
        <Route exact path='/signup' element={<PublicRoute><Signup /></PublicRoute>} />
{/*         <Route exact path='/otp' element={<OTPVerification />} /> */}
        <Route exact path='/forget' element={<PublicRoute><ForgetPassword /></PublicRoute>} />
        <Route path="/success" element={<PrivateRoute><PaymentSuccess /></PrivateRoute>} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
