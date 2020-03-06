import React from 'react';

function Movie(props){
        
    return(
        <div className="card" key={props.movies.imdbID}>
            <div>{props.movies.Title}</div>
            <div>{props.movies.Year}</div>
            <div><img src={props.movies.Poster==="N/A" ? 'img.png' : props.movies.Poster}/></div>
            <div>{props.movies.Type}</div>
            <div>{props.movies.watched ? "Watched" : "Not Watched" }</div>
        </div>
    )
}

export default Movie;