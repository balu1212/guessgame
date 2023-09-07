import img1 from '../Imges/ntr.jpg';
export function Seventh()
{
    return(
        <div className='abc'>
            <h1 className='Actortitle'>N. T. Rama Rao Jr.</h1>
            <div className='Actorblock'>
            <div className='imgsrc'>
              <img src={img1} alt="" height={700} width={400} />
            </div>
            <div className="Details">
             <h3>Fullname :	<h3 className='fullname'>Nandamuri Taraka Rama Rao</h3></h3>
             <h4> DOB : 20 May 1983 </h4>
             <h4>Other names:Tarak</h4>
             <h4>Years active : 1991, 1997 (child artist),2001–present</h4>
             <h4>Height:	1.75 m (5 ft 9in)</h4>
             <h4>Awards	:SIIMA Award(2017),Filmfare Award (2017),NandhiAward (2 times),IIFA (2017),CineMAA(4 times)</h4>
            </div>
            </div>
        </div>
    )
}
export default Seventh;
