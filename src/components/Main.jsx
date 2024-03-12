import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Requests from '../Requests';

const Main = () => {
    const [movies, setMovies] = useState([])
    const [hover, setHover] = useState(false)

    const movie = movies[Math.floor(Math.random() * movies.length)]
    
    console.log(movie)

    // function handleHover() {
    //     setHover(true);
    //     console.log(hover)
    // }

    // function handleHoverOut() {
    //     setHover(false);
    //     console.log(hover);
    // }

    // onMouseLeave={handleHoverOut} onMouseOver={handleHover}

    useEffect(() => {
        axios.get(Requests.requestPopular).then((response)=> {
            setMovies(response.data.results)
        } )
    }, [])
    
    const truncateString = (str, num) => {
        if(str?.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }

  return (
    <div className='w-full h-[550px] text-white'>
        <div className="cursor-pointer w-full h-full">
            <div className="cursor-pointer absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
            {hover ? (<video className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} > </video>) : 
            (<img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} /> )
            }
            
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className="text-3xl font-bold md:text-5xl">{movie?.title}</h1>
                <div className='my-4'>
                    <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5"> Play </button>
                    <button className="border ml-4 text-white border-gray-300 py-2 px-5"> Watch Later </button>
                </div>
                <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                <p className='w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'> {truncateString(movie?.overview, 150)} </p>
            </div>
        </div>
    </div>
  )
}

export default Main