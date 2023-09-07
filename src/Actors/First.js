
import img1 from '../Imges/rajini.jpg';
export function First()
{
    return(
        <div className='abc'>
            <h1 className='Actortitle'>RAJINIKANTH</h1>
            <div className='Actorblock'>
            <div className='imgsrc'>
              <img src={img1} alt="" height={700} width={400} />
            </div>
            <div className="Details">
             <h3>Fullname :	<h3 className='fullname'>Shivaji Rao Gaikwad</h3></h3>
             <h4> DOB : 12 December 1950</h4>
             <h4>Other names:Rajini,Super Star,Thalaivar,Style Mannan</h4>
             <h4>Years active : 1975–present</h4>
             <h4>Height:	1.7 m (5 ft 7 in)</h4>
             <h4>Awards	: Dadasaheb Phalke Award (2019),Padma Vibhushan (2016),NTR National Award (2016),Padma Bhushan (2000),Kalaimamani (1984)</h4>
            </div>
            </div>
        </div>
    )
}
export default First;
