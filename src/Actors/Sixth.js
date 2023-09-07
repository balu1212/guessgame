import img1 from '../Imges/prabhas.jpg';
export function Sixth()
{
    return(
        <div className='abc'>
            <h1 className='Actortitle'>PRABHAS</h1>
            <div className='Actorblock'>
            <div className='imgsrc'>
              <img src={img1} alt="" height={700} width={400} />
            </div>
            <div className="Details">
             <h3>Fullname :	<h3 className='fullname'>Uppalapati Venkata Suryanarayana Prabhas Raju</h3></h3>
             <h4> DOB : 23 October 1979 </h4>
             <h4>Other names:RebelStar,Darling</h4>
             <h4>Years active : 2002–present</h4>
             <h4>Height:	1.88 m(6' 1")</h4>
             <h4>Awards	: CineMAA Awards (2010),NandhiAward(2013),Filmfare Awards South(2015),South Indian International Movie Awards(2017)</h4>
            </div>
            </div>
        </div>
    )
}
export default Sixth;
