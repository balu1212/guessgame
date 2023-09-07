import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Slide1,Slide2,Slide3,Slide4,Slide5,Slide6,Slide7} from './Slides';
import {useState,createContext} from 'react';
export  const Appcontext=createContext();

function App() {
  const[count,setcount]=useState(0);
  return (
    <div className="App">
    <Appcontext.Provider value={{count,setcount}}> 
          <Router>
          <Routes>
            <Route className='FirstSilde1' path='/' element={<Slide1/>}/>
            <Route path='/Slide2' element={<Slide2/>}/>
            <Route path='/Slide3' element ={<Slide3/>}/>
            <Route path='/Slide4' element={<Slide4/>}/>
            <Route path='/Slide5' element={<Slide5/>}/>
            <Route path='/Slide6' element={<Slide6/>}/>
            <Route path='/Slide7' element={<Slide7/>}/>
          </Routes>
          </Router>
          </Appcontext.Provider> 
    </div>
  );
}

export default App;
