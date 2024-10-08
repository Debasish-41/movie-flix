

function MovieCard (props){
   
   

    
     const {movies,addStars,decStars,toggleFav,toggleCart } = props;
        

       const {title,plot,poster,price,rating,stars,fav,isInCart} = props.movies;
       return (
        <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img alt="Poster" src={poster} />
                </div>

                <div className="right">
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    {/* <div className="poster">{poster}</div> */}
                    <div className="price">Rs. {price}</div>

                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">

                            <img className="str-btn"
                             alt="decrease"
                             src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png"
                             onClick={() => {decStars(movies)}}/>



                           <img alt="star" 
                           src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" 
                           className="stars" /> 

                           <img className="str-btn"
                            alt="increase"
                            src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                            onClick={() => {addStars(movies)}}/>

                           <span>{stars}</span>


                        </div>
 
                        {/* {fav ? <button className="unfavourite-btn" onClick = {this.handleFav}>Un-favourite</button>:
                        <button className="favourite-btn" onClick = {this.handleFav}>Favourite</button>}  */}

                        <button className= {fav ? "unfavourite-btn" : "favourite-btn"}
                        onClick = {() => {toggleFav(movies)}}> {fav ? "unfavourite" : "favourite"}</button>
                        
                        {/* {isInCart ? <button className="rmv-cart-btn" onClick={this.handleAddToCart}>Remove from cart</button> :
                        <button className="cart-btn" onClick={this.handleAddToCart}>Add to cart</button> } */}
                        
                        <button className= {isInCart ? "rmv-cart-btn ": "cart-btn"}
                        onClick={() => {toggleCart(movies)}}> {isInCart ? "Remove from cart" : "Add to cart"}</button>


                        
                    </div>
                </div>

            </div>

        </div>
       )
    }

export default MovieCard;