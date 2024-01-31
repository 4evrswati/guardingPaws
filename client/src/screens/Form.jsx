import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CharityForm(){
    return (
      <div>
      <div>
        <Navbar/>
      </div>
        <div className='p-9 size-full h-max  bg-[url(./images/bg1.png)] cursor-pointer
              bg-contain hover:scale-100 transition-all duration-200
              hover:bg-[url(./images/bg.png)]
              bg-white rounded-lg'>
          <h2 className='text-center text-3xl font-bold py-20'>Charity Form</h2>
          <form className='text-center' >
            <label className='py-5 my-5 px-2'>
              Charity Name:  
              
            </label>
            <input
                type="text"
                name="charityName"
                className='border-2 border-black'
              />
            <br />
            <br />
    
            <label className='py-15 my-5 px-2'>
              Mission:  
              
            </label>
            <textarea
                name="mission"
                className='border-2 border-black'
              />
            <br />
            <br />
    
            <label className='py-5 my-15 px-2'>
              Impact:  
              
            </label>
            <textarea
                name="impact"
                className='border-2 border-black'
              />
            <br />
            <br />
    
            <label className='py-5 my-15 px-2'>
              Success Story:  
              
            </label>
            <textarea
                name="successStory"
                className='border-2 border-black'
              />
            <br />
            <br />
    
            <button type="submit" className=" hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full">Submit</button>
          </form>
        </div>
        <div>
        <Footer/>
      </div>
      </div>
      );
}



export default CharityForm;