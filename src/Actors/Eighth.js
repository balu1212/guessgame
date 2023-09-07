import img1 from '../Imges/Dhanush.jpg';
export function Eighth()
{
    return(
        <div className='abc'>
            <h1 className='Actortitle'>DHANUSH</h1>
            <div className='Actorblock'>
            <div className='imgsrc'>
              <img src={img1} alt="" height={700} width={400} />
            </div>
            <div className="Details">
             <h3>Fullname :	<h3 className='fullname'>venkatesh Prabhu Kasthuri Raja</h3></h3>
             <h4> DOB : 28 July 1983</h4>
             <h4>Other names:Dhanush K Raja</h4>
             <h4>Years active : 1975–present</h4>
             <h4>Height:	1.68 m (5 ft 6 in)</h4>
             <h4>Awards	: National Film Award (2 Times),Filmfare Award(2013),Filmfare Awards(7 Times),SIIMA (2Times),IIFA(3 Times)</h4>
            </div>
            </div>
        </div>
    )
}
export default Eighth;
