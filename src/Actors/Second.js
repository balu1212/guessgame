import img1 from '../Imges/ramcharan.jpg';
export function Second()
{
    return(
        <div className='abc'>
            <h1 className='Actortitle'>RAM CHARAN</h1>
            <div className='Actorblock'>
            <div className='imgsrc'>
              <img src={img1} alt="" height={700} width={400} />
            </div>
            <div className="Details">
             <h3>Fullname :	<h3 className='fullname'>Konidela Ram Charan</h3></h3>
             <h4> DOB : 27 March 1985</h4>
             <h4>Other names:Cherry, Ram</h4>
             <h4>Years active : 2007–present</h4>
             <h4>Height:	1.74 m </h4>
             <h4>Awards	: CineMAA Awards(1 Time),Filmfare Awards(3 Times),NandhiAward(2 Times),SIIMA(1 times)</h4>
            </div>
            </div>
        </div>
    )
}
export default Second;
