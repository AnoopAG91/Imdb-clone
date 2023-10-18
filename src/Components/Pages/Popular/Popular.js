import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Popular.css'
import { AiFillStar } from 'react-icons/ai'

function Popular() {
    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=ca888f5545540cd60e2524d9deaab8ab")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])
    console.log(popularMovies)
    return (
        <div className='popular-wrapper'>
            <h1><span className='page-title-color'>Popular</span> Movies</h1>
            <div className='popular'>
            {
                
                popularMovies.map((popular) => (
                    
                    <Link key={popular.id} to={`/movie/${popular.id}`}>
                    <div key={popular.id} className='popular-content'>
                        <div className='popular-image'>
                            <img src={`https://image.tmdb.org/t/p/w500${popular.poster_path}`} />
                            <div className='overlay-content'>
                            <span className='popular-overlay-title'>{popular.original_title}</span>
                            <p>{popular.overview}</p>
                            <span className='popular-overlay-rating'>Rating: {popular.vote_average} <AiFillStar style={{color:"orange"}}/></span>
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

export default Popular