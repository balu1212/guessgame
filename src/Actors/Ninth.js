
import img1 from '../Imges/AlluArjun.jpg';
export function Ninth()
{
    return(
        <div className='abc'>
            <h1 className='Actortitle'>ALLUARJUN</h1>
            <div className='Actorblock'>
            <div className='imgsrc'>
              <img src={img1} alt="" height={700} width={400} />
            </div>
            <div className="Details">
             <h3>Fullname :	<h3 className='fullname'>Allu Arjun</h3></h3>
             <h4> DOB : 	8 April 1982</h4>
             <h4>Other names:Bunny, Mallu Arjun</h4>
             <h4>Years active : 2001–present</h4>
             <h4>Height:	1.75 m (5 ft 9 in)</h4>
             <h4>Awards	: CineMAA Awards(5 Times),Filmfare Awards(6 Times),NandhiAward(5 Times),SIIMA(4 times)</h4>
            </div>
            </div>
        </div>
    )
}
export default Ninth;
