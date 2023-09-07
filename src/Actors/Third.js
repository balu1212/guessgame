import img1 from '../Imges/thalapathy.jpg';
export function Third()
{
    return(
        <div className='abc'>
            <h1 className='Actortitle'>Vijay</h1>
            <div className='Actorblock'>
            <div className='imgsrc'>
              <img src={img1} alt="" height={700} width={400} />
            </div>
            <div className="Details">
             <h3>Fullname :	<h3 className='fullname'>Joseph Vijay</h3></h3>
             <h4> DOB : 22 June 1974 </h4>
             <h4>Other names:Thalapathy</h4>
             <h4>Years active : 1984–present</h4>
             <h4>Height:	1.77 m </h4>
             <h4>Awards	: Behindwoods Gold Medals (5 Times),SIIMA (2016),StarIndia Award(9 times)</h4>
            </div>
            </div>
        </div>
    )
}
export default Third;
