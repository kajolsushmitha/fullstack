import './App.css';
import ClassComponent from './Components/ClassComponents/classcomponent';
import About from './Components/FuntionalComponents/About';
import Home from './Components/FuntionalComponents/Home';
import Gallery from './Components/FuntionalComponents/Gallery';
import NavBar from './Components/FuntionalComponents/NavBar';
import Contact from './Components/FuntionalComponents/contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "./assets/css/Home.css";
import "./assets/css/NavBar.css";
import UseEffect from './Components/FuntionalComponents/UseEffect';
import UseRef from './Components/FuntionalComponents/UseRef';
import UseContext from './Components/FuntionalComponents/UseContext';


function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/about"element={<About college="Kongu Engineering college" college1="Kongu Polytecnic"college2="Kongu Naturopathy"/>}/>
        <Route path="/gallery"element={<Gallery/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/useEffect" element={<UseEffect/>}/>
        <Route path="/useref" element={<UseRef/>}/>
        <Route path="/usecontext" element={<UseContext/>}/>

      </Routes>
      </BrowserRouter>
    
     
    </div>
  );
  
}
export default App;
