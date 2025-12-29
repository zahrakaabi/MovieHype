import Menu from './Navbar'

export const WatchedList = ({watchedList, removeFromWatchedlist, searchInput}) =>{
    return (
        <>
        <div className="container watchedList mt-5 pt-5">
          
          {watchedList.filter((filtredElement)=>{
                if (searchInput === ""){
                    return filtredElement
                }else if (filtredElement.Title.toLowerCase().includes(searchInput.toLowerCase())){
                    return filtredElement
                }
            }).map(element =>

           <div className="mt-5">
                  <img className="fav--movie--pic" src={element.Poster} alt={element.Title}/>
                  <div className="remove--button--wishlist" onClick={()=> removeFromWatchedlist(element)}><i class="fas fa-eye-slash"></i></div>
           </div>
           )}
       </div>
        </>
    )
}