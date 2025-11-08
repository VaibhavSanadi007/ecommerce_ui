import {Routes,Route} from 'react-router-dom';
import Home from '../pages/Home';
import ViewCart from '../pages/ViewCart';
import Shop from '../pages/Shop';
import Product from '../pages/Product';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Create from '../pages/Create';
import About from '../pages/About';
import Checkout from '../pages/Checkout';
import MyOrder from '../pages/MyOrder';


const Approuter = () => {

  return (
    <>
    <Routes>
      <Route path='/'  element={<Home/>}  />
      <Route path='/viewcart'  element={<ViewCart/>}  />
      <Route path='/shop'  element={<Shop/>}  />
      <Route path='/product/:prodId'  element={<Product/>}  />
      <Route path='/signin'  element={<SignIn/>}  />
      <Route path='/profile'  element={<Profile/>}  />
      <Route path='/dashboard'  element={<Dashboard/>}  />
      <Route path='/create'  element={<Create/>}  />
      <Route path='/about'  element={<About/>}  />
      <Route path='/checkout'  element={<Checkout/>}  />
      <Route path='/myorder'  element={<MyOrder/>}  />
    </Routes>
    </>
  )
}
export default Approuter