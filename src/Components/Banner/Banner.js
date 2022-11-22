import React, { useEffect,useState } from 'react'
import axios from '../../axios';
import {API_KEY , imageUrl} from '../../constants/Constants';

import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US `).then((response)=>{
            console.log(response.data.results[5]);
            setMovie(response.data.results[5]);
            
        })
       
    }, [])
    return (
       

        
        <div className="Banner" style={{backgroundImage:`url(${ movie ? imageUrl+ movie.backdrop_path : ""})`}}>
            <div className="content">
                <h1 className="title">{movie ? movie.title : ""}</h1>
                <div className="Banner-Buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="discription">{movie ? movie.overview : ""}</h1>
            </div>
        
            <div className="fade-bottom">

            </div>
        </div>
    )
    }

export default Banner
