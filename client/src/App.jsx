import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Login from './Pages/User Auth/Log in'
import Signup from './Pages/User Auth/Signup'
import ForgetPassword from './Pages/User Auth/ForgetPassword'
import Error from './Pages/Error'
import Footer from './Components/Footer'
import Items from './Pages/Items'
import Cart from './Pages/Cart'
import OrderHistory from './Pages/OrderHistory'
import PaymentSuccess from './Pages/PaymentSuccess'
import PrivateRoute from './Components/PrivateRoute'
import UserProfile from './Pages/UserProfile'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-white_700 dark:bg-black_700'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<PrivateRoute> <Home /></PrivateRoute>} />
        <Route exact path='/Items' element={<PrivateRoute><Items /></PrivateRoute>} />
        <Route exact path='/cart' element={<PrivateRoute> <Cart /></PrivateRoute>} />
        <Route exact path='/history' element={<PrivateRoute> <OrderHistory /></PrivateRoute>} />
        <Route exact path='/profile' element={<PrivateRoute> <UserProfile /></PrivateRoute>} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/forget' element={<ForgetPassword />} />
        <Route path="/success" element={<PrivateRoute><PaymentSuccess /></PrivateRoute>} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
