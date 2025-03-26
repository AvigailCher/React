import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './lesson4/screens/Home';
// import About from './lesson4/screens/About';
// import Contact from './lesson4/screens/Contact';
// import Services from './lesson4/screens/Services';
// import { useTranslation } from 'react-i18next';
// import ThemeContext from './lesson4/context/ThemeContext';
// import Chat from './componnent/chat';
// import WithLogging from './componnent/WithLogging';
// import Date from './componnent/Date';
import UserTable from './lesson9/useMemory';
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
  // const{t,i18n}=useTranslation();  

  // const translate=(language)=>{
  //   i18n.changeLanguage(language)
  // }
  // const Withl=WithLogging(Date);
  return (  
    // <ThemeContext.Provider>
    //     <BrowserRouter>
    //     <nav class="navbar bg-dark border-bottom border-body">
    //       <button  type="button" class="btn btn-secondary btn-sm" onClick={()=>translate('en')} >En</button>
    //       <button  type="button" class="btn btn-secondary btn-sm" onClick={()=>translate('he')} >He</button>
    //       <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-2" to="/">{t("homePage")}</Link>
    //       <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-2" to="/about">{t("aboutPage")}</Link>
    //       <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-2" to="/services">{t("servicePage")}</Link>
    //       <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-2" to="/contact">{t("contactPage")}</Link>
    //     </nav>
    //     <Routes>
    //       <Route path='/' element={<Home/>}></Route>
    //       <Route path='/about' element={<About/>}></Route>
    //       <Route path='/services' element={<Services/>}></Route>
    //       <Route path='/contact' element={<Contact/>}></Route>
    //     </Routes>
    //     </BrowserRouter>
    //     </ThemeContext.Provider>
    // <Chat></Chat>
    // <Withl date="10/12/24"></Withl>
    <UserTable></UserTable>
  );
}

export default App;
