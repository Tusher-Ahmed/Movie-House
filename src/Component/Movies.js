import { useState,useEffect } from 'react';
import { BsSearch } from "react-icons/bs";
import MovieCard from './MovieCard';
const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=ca0dece7';
export default function Movies() {
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');
    const SearchMovies=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data= await response.json();
        setMovies(data.Search);
      }
      useEffect(()=>{
        SearchMovies('Batman');
      },[])
      const handleInput=e=>{
        setSearchTerm(e.target.value);
      }
      const handleClick=e=>{
        e.preventDefault();
        SearchMovies(searchTerm);
      }
  return (
    <div className='container'>
      <div className="heading">
         <h2>Movie House</h2>
         <div className="search">
            <input 
             placeholder='Search for movies'
             type="text"
             value={searchTerm}
             onChange={handleInput}
            />
            <BsSearch className='search' onClick={handleClick}/>
         </div>
     </div>
       <div className="movies">
        <div className="row">
                {movies.length>0?movies.map((item)=><MovieCard Movie1={item}/>):<h2>No Related Movie is Found!!</h2>}
        </div>
       </div>
    </div>
  )
}

 