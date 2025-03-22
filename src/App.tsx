import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Body from './Components/Page/Body';
import Services from './Services_pg';
import './App.css';
import About from './About_pg';
import Contact from './Contact_pg';
import Blog from './Blog_pg';

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/services" element={<Services />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/blog' element={<Blog/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}