
import img1 from '../Imges/Mahesh.jpg';
export function Tenth()
{
    return(
        <div className='abc'>
            <h1 className='Actortitle'>MAHESH BABU </h1>
            <div className='Actorblock'>
            <div className='imgsrc'>
              <img src={img1} alt="" height={700} width={400} />
            </div>
            <div className="Details">
             <h3>Fullname :	<h3 className='fullname'>Ghattamaneni Mahesh Babu</h3></h3>
             <h4> DOB : 9 August 1975</h4>
             <h4>Years active : 1979–present</h4>
             <h4>Height:	1.83 m </h4>
             <h4>Awards	: CineMAA Awards(3 Times),Filmfare Awards(5 Times),NandhiAward(8 Times),SIIMA(4 times)</h4>
            </div>
            </div>
        </div>
    )
}
export default Tenth;
