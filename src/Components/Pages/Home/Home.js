import React, { useEffect, useState } from 'react';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

function Home() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    
    const apiKey = 'ca888f5545540cd60e2524d9deaab8ab';
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => setMovieData(data.results));
  }, []);
  console.log(movieData)

  return (
    <div className='home'>
      <div className='carousel-wrapper'>
        <Carousel autoPlay={true} transitionTime={3} showStatus={false} infiniteLoop={true} showThumbs={false}>
          {movieData.map(movie => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <div className='carousel' key={movie.id}>
                <div className='movie-poster'>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt='backdrop' />
                  <div className='poster-overlay'></div>
                </div>
                <div className='movie-detail'>
                  <div className='movie-title'><h1>{movie.original_title}</h1></div>
                  <div className='movie-date'><span className='releasedOn'>Released On</span>: {movie.release_date} </div>
                  <div className='vote'>{movie.vote_average} <AiFillStar/></div>
                  <div className='movie-description'>{movie.overview}</div>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>

      <div className='popular-section'>
       
      </div>
    </div>
  );
}

export default Home;