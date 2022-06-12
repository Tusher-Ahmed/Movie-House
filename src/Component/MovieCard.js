import React from 'react'

const MovieCard=({Movie1})=>{
  return (
        <div className="movieCard col-md-4" key={Movie1.imdbID}>
            <div >
                <p>{Movie1.Year}</p>
            </div>
            <div><img src={Movie1.Poster!=='N/A'?Movie1.Poster:'https://via.placeholder.com/300' } alt="Poster" /></div>
            <div>
                <span>{Movie1.Type}</span>
                <h3>{Movie1.Title}</h3>
            </div>
        </div>  
  )
}
export default MovieCard;