import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import {Routes,Route} from "react-router-dom"
import More from "./components/More";
import Contact from './components/Contact';

function App() {
  return (
     <>
     <Navbar/>
      
     <Routes>
    
     <Route path='/' element={ <Body/> }/>
     <Route path='/more' element={ <More/>}/>
     <Route path='/contact' element={ <Contact/>}/>


    </Routes>
    
    
     </>
    
  );
}

export default App;
