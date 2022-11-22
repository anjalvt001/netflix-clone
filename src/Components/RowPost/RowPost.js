import './RowPost.css'
import {useEffect,useState} from 'react'
import {imageUrl , API_KEY} from '../../constants/Constants'
import Youtube from 'react-youtube'
import React from 'react'
import axios from '../../axios';

   

function RowPost(props) {
    const [movies, setmovies] = useState([])
    const [urlId,seturlId] = useState('')

    useEffect(() => {
        axios.get(props.url,props.comedy).then((respones)=>{
            console.log(respones.data.results)
            setmovies(respones.data.results);

        })
        
        
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

      const handleMovie = (id)=>{
            console.log(id);
            axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`).then(respones=>{
                console.log(respones.data);
               
              
           })
    }

    return (
        <div className="row">
            <h1>{props.title}</h1>
            <div className="posters">

                {
                    movies.map((obj)=>{
                    return(
                        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' :"poster"} src={`${props.isSmall ? imageUrl+obj.poster_path : imageUrl+obj.backdrop_path}`} alt="poster" />
                    )
                })}
                
            </div>
        {  urlId  &&   <Youtube  opts={opts}  videoId={urlId.id} />  }
            
        </div>
    )
}

export default RowPost
