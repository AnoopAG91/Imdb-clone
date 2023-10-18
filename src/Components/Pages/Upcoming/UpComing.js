import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './UpComing.css'
import { AiFillStar } from 'react-icons/ai'

function UpComing() {
    const [upComingMovies, setUpComingMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=ca888f5545540cd60e2524d9deaab8ab")
            .then(res => res.json())
            .then(data => setUpComingMovies(data.results))
    }, [])
    console.log(upComingMovies)
    return (
        <div className='popular-wrapper'>
            <h1><span className='page-title-color'>UpComing </span>Movies</h1>
            <div className='popular'>
            {
                
                upComingMovies.map((upComing) => (
                    
                    <Link key={upComing.id} to={`/movie/${upComing.id}`}>
                    <div key={upComing.id} className='popular-content'>
                        <div className='popular-image'>
                            <img src={`https://image.tmdb.org/t/p/w500${upComing.poster_path}`} />
                            <div className='overlay-content'>
                            <span className='popular-overlay-title'>{upComing.original_title}</span>
                            <p>{upComing.overview}</p>
                            <span className='popular-overlay-rating'>Rating: {upComing.vote_average} <AiFillStar style={{color:"orange"}}/></span>
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

export default UpComing