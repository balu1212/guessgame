import img1 from '../Imges/surya.jpg';
export function Fifth()
{
    return(
        <div className='abc'>
            <h1 className='Actortitle'>	SURIYA</h1>
            <div className='Actorblock'>
            <div className='imgsrc'>
              <img src={img1} alt="" height={700} width={400} />
            </div>
            <div className="Details">
             <h3>Fullname :	<h3 className='fullname'>Saravanan Sivakumar</h3></h3>
             <h4> DOB : 23 July 1975</h4>
             <h4>Occupations :Actor,film producer</h4>
             <h4>Years active : 1997–present</h4>
             <h4>Height:	1.7 m (5 .5ft)</h4>
             <h4>Awards	: Filmfare Awards(6 times),CineMAA (2013),Filmfare(6 Times),SIIMA(2 times),National Film Awards(2 times) </h4>
            </div>
            </div>
        </div>
    )
}
export default Fifth;
