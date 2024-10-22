import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import SignIn from './SignIn/SignIn';
import Store from './Store/Store';
import Brands from './Brands/Brands';
import AboutUs from './AboutUs/AboutUs';
import ShopItem from './ShopItem/ShopItem';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import Dashboard from './Dashboard/Dashboard';
// -----------------------------------------
import Products from './Dashboard/Screens/Products';
import Orders from './Dashboard/Screens/Orders';
import Customers from './Dashboard/Screens/Customers';
import Reports from './Dashboard/Screens/Reports';
// import DashboardPage from './Dashboard/Screens/Dashboard';



const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/store" element={<Store />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/shopitem" element={<ShopItem />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* ---------- */}
      {/* <Route path="/dashboardpage" element={<DashboardPage />} /> */}
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/reports" element={<Reports />} />
      {/* Añade más rutas según sea necesario */}
    </Routes>
  );
};

export default AppRouter;

