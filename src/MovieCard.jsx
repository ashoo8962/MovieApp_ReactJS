import React from "react";

const MovieCard =({movie:{imdbID,Year,Poster,Title,Type}})=>{
  return (
    <div className="movie" key={imdbID}>
            <div>
              <p>{Year}</p>
            </div>

              <div>
                <img src={Poster!== 'NA' ?Poster : 'https://via.placeholder.com/400'} alt={Title}/>
              </div>
              
              <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
              </div>

              <div>
                <p>{Year}</p>
                </div>
  
              </div>
  );
}

export default MovieCard;