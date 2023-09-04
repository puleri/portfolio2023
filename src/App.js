import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Index from './components';
import Navbar from './components/NavBar/NavBar';
import Homepage from './components/Homepage/Homepage';
import Contact from './components/Contact/Contact';
import ThankYou from './components/ThankYou/ThankYou';



function App() {
  return (
    <>
    
     <div className="">
       <Router>
         <Routes>
           
           <Route path="/" element={<Homepage/>}></Route>
           <Route path="/contact" element={<Contact/>}></Route>
           <Route path="/thank-you" element={<ThankYou/>  }></Route>

         </Routes>
       </Router>
     </div>
    </>

  );
}

export default App;
