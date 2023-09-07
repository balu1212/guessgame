import React from 'react';
import './Slide2.css'
import {Link} from 'react-router-dom';
export function Slide2()
{
    return(
        <div >
           < div className='ThisisSlide2'>
            <h2 className='InstructText'>Choose any actor name then click on OK</h2>
            <div className='Options'>
                <div className='FirstFive'>
                <h3 className='HeroName'> Rajinikanth</h3>
                <h3 className='HeroName'> NTR Jr</h3>
                <h3 className='HeroName'> Prabhas</h3>
                <h3 className='HeroName'> Surya</h3>
                <h3 className='HeroName'>Ram Charan</h3>
             </div>
            <div className='SecondFive'>
            <h3 className='HeroName'> Dhanush</h3>
            <h3 className='HeroName'> AlluArjun</h3>
            <h3 className='HeroName'> Pawan Kalyan</h3>
            <h3 className='HeroName'> Vijay</h3>
            <h3 className='HeroName'> Mahesh Babu</h3>
            </div> 
            </div>
        <button > <Link className='Slide1button' to='/Slide3'> OK</Link></button>
        </div>
        </div>
    )
}
export default Slide2;