import React, {useState, useEffect} from 'react';
import {UserAuth} from '../context/AuthContext';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { db } from './firebase';
import {updateDoc, doc, onSnapshot} from 'firebase/firestore';
import {AiOutlineClose} from 'react-icons/ai'

const SavedShows = () => {
    const [movies, setMovies] = useState([]);
    const {user} = UserAuth();
    

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };



    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc)=> {
            setMovies(doc.data()?.savedShows);
        })
    }, [user?.email]);

    const movieRef = doc(db, 'users', `${user?.email}`)

    const deleteShow = async (passedID) => {
        try {
            const result = movies.filter((item) => item.id !== passedID)
            await updateDoc(movieRef, {
                savedShows: result,
            });
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
         <div className='w-full h-full p-4'>
       
            <div className="w-full h-full group relative flex items-center">
                <MdChevronLeft onClick={slideLeft} size={40} className="text-black left-0 absolute z-20 bg-white rounded-full cursor-pointer opacity-50 hover:opacity-100 hidden group-hover:block" /> 
                <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative" id={'slider' }>
                    {movies.map((item, id) => (
                          <div key={id} className='w-[160px] sm:2-[200px] md:w-[240px] lg:2-[280px] inline-block cursor-pointer relative p-2'>
                          <img src={`https://image.tmdb.org/t/p/w500/${item?.img}`}  alt={item.title} /> 
                          <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100 overflow-hidden'>
                              <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                                      {item?.title}
                              </p>
                              <p onClick={() => deleteShow(item.id)} className="absolute text-gray-300 top-4 right-4"> <AiOutlineClose /></p>
                          </div>
                      </div> 
                    )
                    )}
                </div>
                <MdChevronRight onClick={slideRight} size={40} className="cursor-pointer bg-white text-black right-0 rounded-full absolute z-10  opacity-50 hover:opacity-100 hidden group-hover:block" />
            </div>
        </div>
    </>
  )
}

export default SavedShows