import MovieCard from "./Moviecard";

function MovieList (props){
 
    
    //const {title,plot,price,rating,stars,fav,isInCart,poster} = this.state.movies;
    const {movies , addStars , decStars , toggleFav , toggleCart} = props;
    console.log(props);
    // console.log(movies, "before return");

      return(
        <>
        {/* {console.log(movies, "after return")} */}
        {movies.map((movie,index) => <MovieCard movies = {movie}
                                          addStars = {addStars}
                                          decStars = {decStars}
                                          toggleFav = {toggleFav}
                                          toggleCart = {toggleCart}
                                          key= {index} /> )}

        
        
        </>
      )
       
    }


export default MovieList;