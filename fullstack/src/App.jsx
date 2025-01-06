import './App.css';

import About from './Components/FuntionalComponents/About';
import Home from './Components/FuntionalComponents/Home';
import Gallery from './Components/FuntionalComponents/Gallery';
import NavBar from './Components/FuntionalComponents/NavBar';
import Contact from './Components/FuntionalComponents/Contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "./Components/FuntionalComponents/CSS/Home.css";
import "./Components/FuntionalComponents/CSS/NavBar.css";
import UseEffect from './Components/FuntionalComponents/UseEffect';
import UseRef from './Components/FuntionalComponents/UseRef';
import UseContext from './Components/FuntionalComponents/UseContext';
import UseMemo from './Components/FuntionalComponents/UseMemo';
import SignUp from './Components/FuntionalComponents/SignUp';
import Login from './Components/FuntionalComponents/Login';

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
        <Route path="/useMemo" element={<UseMemo/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
      </BrowserRouter>
    
     
    </div>
  );
  
}
export default App;
