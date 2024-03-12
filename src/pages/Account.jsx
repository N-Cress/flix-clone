import React from 'react';
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <>
      <div className="w-full h-full text-white">
          <img className="sm:block absolute w-full h-[400px] object-cover" 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/fa6f97d9-245e-43d7-bb56-af27cbf6d656/US-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
          alt="" />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-[450px]"> </div>

          <div className="absolute top-[45%] w-full  p-4 md:p-8 "> 
            <h1 className="text-3xl md:text-5xl font-bold"> My Shows </h1>
            <SavedShows />
          </div>
         
      </div>
    
    </>
  )
}

export default Account