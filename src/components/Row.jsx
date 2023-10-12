import axios from 'axios'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'


const Row = ( {title, fetchURL} ) => {
    const [movies, setMovies] = useState([])
    const [like, setLike] = useState(false)


    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results.slice(0, 4))
        })
    }, [fetchURL])

  return (
    <>
        <h2 className="text-white font-bold md:text-xl p-4"> {title} </h2> 
        <div className="relative flex items-center">
            <div id={'slider'}>
                {movies.map((item, id) => {
                return <div className='w-[160px] sm:2-[200px] md:w-[240px] lg:2-[280px] inline-block cursor-pointer relative p-2'>
                            <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}  alt={item.title} /> 
                            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100'>
                                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                                     {item?.title}
                                </p>
                                <p>
                                    {like ? <FaHeart className="absolute top-8 left-8 text-gray-300"/> : <FaRegHeart className="absolute top-4 left-4 text-gray-300" /> }
                                </p>
                            </div>
                        </div> 
                })}
            </div>
        </div>
    </>
  )
}

export default Row