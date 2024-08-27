
import Nav from "./sections/Nav"
import LatestProducts from "./sections/LatestProducts"
import Hero from "./sections/Hero"
import SpecialOffer from "./sections/SpecialOffer"
import TopBrands from "./sections/TopBrands"
import Footer from "./sections/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PickOfTheWeek from "./sections/PickOfTheWeek"
import Laptops from "./sections/Laptops"
import Accessories from "./sections/Accessories"
import ProductDetails from "./sections/ProductDetails"
import All from "./sections/All"
import Profile from "./sections/Profile"
import LoginPage from "./sections/LoginPage"
import RegisterPage from "./sections/RegisterPage"
import ProtectedRoute from "./components/ProtectedRoute"
import MyCart from "./sections/MyCart"
import DisplayProducts from "./sections/DisplayProducts"
import ProfileUpdate from "./components/ProfileUpdate"

const Home = () => (
  <>
    <Hero />
    <DisplayProducts />
    <LatestProducts />
    <SpecialOffer />
    <PickOfTheWeek />
    <Laptops />
    <TopBrands />
    <Accessories />
  </>
);

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/:section/:id" element={<ProductDetails />} />
        <Route path="/profile" 
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/profile/update" element={<ProfileUpdate />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={< RegisterPage />} />
        <Route path="/mycart" element={<MyCart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App
