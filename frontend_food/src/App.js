import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Auth/Login';
import MyLocation from './components/Home/MyLocation';
import RestaurantDetails from './pages/RestaurantDetails';
import CartView from './pages/CartView';
import Checkout from './pages/Checkout';
import PreviousOrders from './pages/PreviousOrders';
import SignupView from './pages/Auth/SignupView';
import Dashboard from './pages/RestaurantDashboard/Dashboard';
import OrderView from './pages/RestaurantDashboard/OrderView';
import MenuView from './pages/RestaurantDashboard/MenuView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignupView />} />
        <Route path='/set-location' element={<MyLocation />} />
        <Route path='/restaurant/:id/:restaurant_name/' element={<RestaurantDetails />} />
        <Route path='/cart-view/' element={<CartView />} />
        <Route path='/checkout/:subTotal/' element={<Checkout />} />
        <Route path='/previous-order/' element={<PreviousOrders />} />
        <Route path='/restaurant-dashboard/' element={<Dashboard />} />
        <Route path='/restaurant-order-view/' element={<OrderView />} />
        <Route path='/restaurant-menu-view/' element={<MenuView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
