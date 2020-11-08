import axios from './axios';
import React,{useState,useEffect} from 'react'
import movieTrailer from 'movie-trailer';
import './Row.css'
import YouTube from 'react-youtube';

//poster_epath doesnt contain the complete path to the image the poster|_path is appended with th is base url to access the images
const base_url = 'https://image.tmdb.org/t/p/original/';

//THE ROW COMPONENT
function Row({title,fetchUrl,isLarge}) {
    const [trailerUrl ,seTrailerUrl] = useState('');

    const [movies,setMovies] = useState([]);
    //A SNIPPET OF CODE WHICH RUNS BASED ON A SPECIFIC CONDITION 
    useEffect(() => {
       
        //ASYNC FUNCTION TO GET THE MOVIES DATA
           async function fetchData(){
              //WHAT GETS SEND IS THE = baseURL + fetchUrl  
              const request = await axios.get(fetchUrl);
              //only this part is relevant to us
              setMovies(request.data.results);
              
              return request;
              
        }
        fetchData();
        
    }, [fetchUrl])
    //sets the dimensiuon of the video player ,when called it autoplays
    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    //WHATEVER IS IN THE BRACKET IS THE DEPENDENCY OF THE USE EFFECT AND  USEFFECT EXECUTES AS MANY AS TIME AS THE DEPENDENCY STATE CHANGES 
    const handleClick = (movie)=>{
       if(trailerUrl){
           seTrailerUrl('');
       }else{
           movieTrailer(movie?.name || movie?.title || movie?.orignal_name)
           .then((url)=>{
               const urlParams = new URLSearchParams(new URL(url).search);
               seTrailerUrl(urlParams.get('v'));
           })
           .catch((error)=>console.log(error));
       }
    }
     
    return (
        <div className="row">
          <h2>{title}</h2>
          <div className="row__posters" >
        
           {  // PRINTING THE POSTER/IMAGE OF THE MOVIES
               movies.map(movie => (
                   <img key ={movie.id}
                   onClick={()=>handleClick(movie)} 
                   className={`row__poster ${isLarge && "row__posterlarge"}`} 
                   src={`${base_url}${movie.poster_path}`} 
                   alt={movie.name}     />
               ) )
           }  
            
          </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} {/* if trailerUrl is not empty we pass the youtube video id and add the trailer */}
        </div> 
    )
}

export default Row;
