import {Component} from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component{
 
    render(){
    //const {title,plot,price,rating,stars,fav,isInCart,poster} = this.state.movies;
    const {movies , addStars , decStars , toggleFav , toggleCart} =this.props;
    console.log(this.props);
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

}
export default MovieList;