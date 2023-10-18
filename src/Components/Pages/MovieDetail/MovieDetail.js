import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './MovieDetail.css'
import {AiOutlineClose} from 'react-icons/ai'

function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ca888f5545540cd60e2524d9deaab8ab`)
      .then((res) => res.json())
      .then((data) => setMovieDetail(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className='movie-page'>
      <h1><span className='page-title-color'>Movie </span>Detail</h1>
      {movieDetail && (
        <div className='movie-wrapper'>
          <Link to={'/'} className='close-btn'><AiOutlineClose/></Link>
          <div className='movie-image'>
          <img src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`} alt="backdrop"/>
          
          </div>

        <div className='movie-content-wrapper'>
          <div className='movie-left'>
            <img src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}/>
            <span className='overlay'></span>
          </div>
          <div className='movie-content'>
          <h2>{movieDetail.title}</h2>
          <p>{movieDetail.overview}</p>
          <p><span >Popularity:</span> {movieDetail.popularity}</p>
          <p><span >Release Date:</span> {movieDetail.release_date}</p>
          </div>
          </div> 

        </div>
      )}
    </div>
  );
}

export default MovieDetail;