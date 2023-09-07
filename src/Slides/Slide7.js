import React from 'react';
import './Slide7.css';
import{useContext} from 'react';
import { Appcontext } from '../App';
import {Link} from 'react-router-dom';
import {First,Second,Third,Fourth,Fifth,Sixth,Seventh,Eighth,Ninth,Tenth} from '../Actors'
export function Slide6()
{
    const{count,setcount}=useContext(Appcontext)
    const clickHandler=()=>
    {
        setcount(0);
    }
   const abc=(count)=>
   {
    switch(count)
        {
         case 1: return <First/>                    
         case 2: return <Second/>      
         case 3: return <Third/>         
         case 4: return <Fourth/>
         case 5: return <Fifth/>
         case 6: return <Sixth/>
         case 7: return <Seventh/>
         case 8: return <Eighth/>
         case 9: return <Ninth/>
         case 10: return <Tenth/>
        default: return <h1> PAGE NOT FOUND</h1> 
                  
        }
   }
    return(
      <div > 
        {abc(count)}
        <div className='footerclass'>
        <button ><Link  className='buttonclass 'onClick={clickHandler} to="/">GO TO HOMEPAGE</Link></button>
        </div>
      </div>
    )
}
export default Slide6;