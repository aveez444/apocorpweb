import './App.css'
import HomePages from './Pages/HomePages';
import ProductsPage from "./Pages/ProductsPage";
import BlogsPage from "./Pages/BlogsPage";
import AboutUsPage from "./Pages/AboutUsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ContactSection from "./Components/ContactSection";
import ScrollToTop from "./Components/ScrollToTop";

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
      <ContactSection />
      <Footer />
    </BrowserRouter>
  )
}

export default App
