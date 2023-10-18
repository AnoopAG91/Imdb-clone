import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './TopRated.css'
import { AiFillStar } from 'react-icons/ai'

function TopRated() {
    const [TopRatedMovies, setTopRatedMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=ca888f5545540cd60e2524d9deaab8ab")
            .then(res => res.json())
            .then(data => setTopRatedMovies(data.results))
    }, [])
    console.log(TopRatedMovies)
    return (
        <div className='popular-wrapper'>
            <h1><span className='page-title-color'>TopRated</span> Movies</h1>
            <div className='popular'>
            {
                
                TopRatedMovies.map((TopRated) => (
                    
                    <Link key={TopRated.id} to={`/movie/${TopRated.id}`}>
                    <div key={TopRated.id} className='popular-content'>
                        <div className='popular-image'>
                            <img src={`https://image.tmdb.org/t/p/w500${TopRated.poster_path}`} />
                            <div className='overlay-content'>
                            <span className='popular-overlay-title'>{TopRated.original_title}</span>
                            <p>{TopRated.overview}</p>
                            <span className='popular-overlay-rating'>Rating: {TopRated.vote_average} <AiFillStar style={{color:"orange"}}/></span>
                        </div>
                        </div>
                    </div>
                    </Link>
                   
                ))
               
            }
             </div>
        </div>
    )
}

export default TopRated