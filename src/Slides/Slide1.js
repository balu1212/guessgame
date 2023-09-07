import './Slide1.css'
import {Link} from 'react-router-dom';
export function Slide1()
{
    return(
        <div className='Slide1class'>
            <h1 claaName='Title1'>GUESS GAMEPLAY</h1>
            <h1 className='Title2'> WELCOME</h1>
            <h1 className='Title3'>LET'S START THE GAME</h1>
            <div className='Slide1buttondiv'>
            <button><Link className='Slide1button' to='/Slide2'> START</Link></button>
            </div>
           
        </div>
    )
}
export default Slide1;