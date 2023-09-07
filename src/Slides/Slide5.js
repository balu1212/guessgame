import React from 'react';
import { useContext} from 'react';
import {Link} from 'react-router-dom';
import { Appcontext } from '../App';
export function Slide5()
{
    const{count,setcount}=useContext(Appcontext);
    const clickHandler=()=>
    {
        setcount(count+3);   
    }
    return (
        < div className='ThisisSlide2'>
            <h2 className='InstructText'>If your selected actor name is mentioned here then click on YES otherwiese NO </h2>
            <div className='Options'>
                <div className='FirstFive'>
                <h3 className='HeroName'> Surya</h3>
                <h3 className='HeroName'> Dhanush</h3>
                <h3 className='HeroName'> AlluArjun</h3>
                <h3 className='HeroName'>Mahesh Babu</h3>
                <h3 className='HeroName'>Vijay</h3>
                </div>
             </div>
            <div className='buttonYesNo'>
            <button><Link className='Slide1buttonY' onClick={clickHandler} to='/Slide6'>Yes</Link></button>
            <button><Link  className='Slide1buttonN' to='/Slide6'>No</Link></button>
            </div> 
        </div>
    );
}
export default Slide5;