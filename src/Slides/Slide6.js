import React from 'react';
import {  useContext } from 'react';
import {Link} from 'react-router-dom';
import { Appcontext } from '../App';
export function Slide6()
{
    const{count,setcount}=useContext(Appcontext);
    const clickHandler=()=>
    {
        setcount(count+4);   
    }
    return (
        < div className='ThisisSlide2'>
            <h2 className='InstructText'>If your selected actor name is mentioned here then click on YES otherwiese NO </h2>
            <div className='Options'>
                <div className='FirstFive'>
                <h3 className='HeroName'> Prabhas</h3>
                <h3 className='HeroName'> NTR Jr</h3>
                <h3 className='HeroName'>AlluArjun</h3>
                </div>
               <div className='SecondFive'>
                <h3 className='HeroName'> Dhanush</h3>
                <h3 className='HeroName'>Mahesh Babu</h3>
                <h3 className='HeroName'> Pawan Kalyan</h3>
                </div>
             </div>
            <div className='buttonYesNo'>
            <button><Link className='Slide1buttonY' onClick={clickHandler} to='/Slide7'>Yes</Link></button>
            <button><Link  className='Slide1buttonN' to='/Slide7'>No</Link></button>
            </div> 
        </div>
    );
}
export default Slide6;