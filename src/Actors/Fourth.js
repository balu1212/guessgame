import img1 from '../Imges/pk.jpg';
export function Fourth()
{
    return(
        <div className='abc'>
            <h1 className='Actortitle'>PAWANKALYAN</h1>
            <div className='Actorblock'>
            <div className='imgsrc'>
              <img src={img1} alt="" height={700} width={400} />
            </div>
            <div className="Details">
             <h3>Fullname :	<h3 className='fullname'>Konidela Kalyan Babu</h3></h3>
             <h4> DOB : 2 September 1968</h4>
             <h4>Other names:PowerStar</h4>
             <h4>Years active : 1996–present</h4>
             <h4>Height:	1.71 m (5 ft 10 in)</h4>
             <h4>Awards: Filmfare (2013),SIIMA (2013),CineMAA(2013),Times of india Film awards (2013)</h4>
            </div>
            </div>
        </div>
    )
}
export default Fourth;
