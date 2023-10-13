import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Movies from './Movies';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


const Row = ( {title, fetchURL} ) => {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
    <>
        <div className='p-4'>
            <h2 className="text-white font-bold md:text-xl p-4"> {title} </h2> 
            <div className="group relative flex items-center">
                <MdChevronLeft onClick={slideLeft} size={40} className="text-black left-0 absolute z-20 bg-white rounded-full cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block" /> 
                <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative" id={'slider'}>
                    {movies.map((item, id) => (
                        <Movies key={id} item={item} /> 
                    )
                    )}
                </div>
                <MdChevronRight onClick={slideRight} size={40} className="cursor-pointer bg-white text-black right-0 rounded-full absolute z-10  opacity-50 hover:opacity-100 hidden group-hover:block" />
            </div>
        </div>
    </>
  )
}

export default Row