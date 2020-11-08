import React, { useEffect,useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './request'

//added to get url to get the banner image
const base_url = 'https://image.tmdb.org/t/p/original/';

function Banner() {
   const [movie,setMovie] = useState([]);
    useEffect(() => {
            
        async function getmovie(){
            const response = await axios.get(requests.fetchNetflixOriginals); 
       //allocates a random movie      
      setMovie(
        response.data.results[
          Math.floor(Math.random() * (response.data.results.length - 1))
        ]
      );
      return response;
        }
        getmovie();
        
    }, [])
    //this function restricts the length of the input string(description in this case) to n characters than adds ... 
    const truncate = (str, n) => {
      return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    };

    return (

       
        <div className="banner"
            style={{
                backgroundSize:"Cover",
                backgroundImage:`url(${base_url}${movie?.backdrop_path})`,
                backgroundPosition:'center center',
            }}>
            <div className="banner__contents">    
           
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
             <div className="banner_buttons">
               <button className="banner_btn">Play</button>
               <button className="banner_btn">My List</button>

             </div>
            <h4  className="movie_name">{truncate(movie.overview,150)}</h4>
            </div>
            <div  className="banner__fadeBottom"   />
        </div>
    )
}

export default Banner;
