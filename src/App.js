import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Index from './components';
import Navbar from './components/NavBar/NavBar';
import Homepage from './components/Homepage/Homepage';



function App() {
  return (
    <>
    
     <div className="">
       <Router>
         <Routes>
           
           <Route path="/" element={<Homepage/>}></Route>


         </Routes>
       </Router>
     </div>
    </>

  );
}

export default App;
