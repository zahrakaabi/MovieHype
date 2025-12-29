import {Col, Row} from 'react-bootstrap'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

export default function Favorite({favoriteValue,removeFromWishlist,removeAllWishlist, searchInput}){
return (
    <>
     <div className="cards mt-5 pt-5" id="wishlist">
          
           {favoriteValue.filter((filtredElement)=>{
                if (searchInput === ""){
                    return filtredElement
                }else if (filtredElement.Title.toLowerCase().includes(searchInput.toLowerCase())){
                    return filtredElement
                }
            }).map(element =>

            <div className="container mx-5 px-4 mt-5">
            <Row>
                <Col md={3}>
                   <img className="fav--movie--pic" src={element.Poster} alt={element.Title}/>
                </Col>
                <Col md={9} className="fav--movie--info mt-2">
                   <h2>{element.Title}</h2>
                   <span>{element.Year} | {element.Runtime} | {element.Genre}</span>
                   <div>
                      <span><i class="fas fa-star"></i>  &nbsp; {element.Rate}</span>
                      <span>{element.Metascore}</span> &nbsp; &nbsp; 
                      <spann>Metascore</spann>
                   </div>
                   <div>
                   <Rater total={10} rating={2}/>
                   </div>
                   <div>
                       <span>{element.Actors}</span>
                   </div>
                   <div>
                       <p>{element.Plot}</p>
                   </div>
                   <span>
                   {/* callback */}
                   <button onClick={()=>removeFromWishlist(element)}>Remove from your Wishlist</button>
                   <button className="ml-2">Watch</button>
                   </span>
                </Col>
            </Row>
            </div>


            /* <Card className="movie">
                <Card.Img variant="top" className="img" src={element.Poster} />
                <Card.Body className="card-body">
                    <Card.Title className="movie--title">{element.Title}</Card.Title>
                    <span className="text-movie">{element.Year}</span>
                    <span className="movie--icons">
                        <span onClick={()=>getFavoriteValue(element)}><i class="fas fa-heart"></i></span>
                        <span><i class="fas fa-eye"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span>{element.Rate}</span>
                    </span>  
                </Card.Body>
            </Card> */
            )}
         <span className="remove--favlist">
         <button onClick={()=>removeAllWishlist()}>Remove all</button>
         </span>
        </div>
    </>
) 
  
}