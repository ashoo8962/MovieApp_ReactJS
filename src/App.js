import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL='http://www.omdbapi.com?apikey=c032e2d7';

const movie1={
  "Title": "Marvel Studios: Assembled",
  "Year": "2021–",
  "imdbID": "tt14094206",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNWMyNWYyMmYtZjNiZi00MzFmLTg2MjYtYWEzZWY1MzBhY2I2XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
}



const App = ()=> {
  const[movies,setMovies]=useState([]);
  const [searchTerm,setSearchTerm]=useState('');

  const searchMovies =async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
    
  }
  useEffect(()=>{
    searchMovies('Marvel')

    
  },[]);


  return (
<div className="app">
    <h1>Movies</h1>

    <div className="search">
        <input placeholder="Search for movies" 
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)} />
            <img 
            src={SearchIcon}
            alt="search"
            onClick={()=>searchMovies(searchTerm)}
            
            />
     </div>

        {
          movies?.length>0
          ?
          <div className="container">
            {movies.map((movie)=>(<MovieCard movie={movie}/>))}
            </div> 
        :
        (
          <div className="empty" >
            <h2>No movies found</h2>
          </div>
        )
          
        }
    
</div>
  );

};
export default App;