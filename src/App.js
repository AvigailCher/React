import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Services from './screens/Services';
// import logo from './logo.svg';
// import First from "./lesson1/componnets/First"
// import ImgGallery from './lesson2/componnets/imgesC';
// import Server from './lesson_3_pizza/componnent/PizzaDetails';
// function App() {
//   return (  
//         <ImgGallery></ImgGallery>
//         // <Server></Server>
//   );
// }

function App() {
  return (  
        <BrowserRouter>
        <nav class="navbar bg-dark border-bottom border-body">
          <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-2" to="/">Home</Link>
          <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-2" to="/about">About</Link>
          <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-2" to="/services">Services</Link>
          <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-2" to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
