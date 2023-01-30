import React from 'react'
import insta from "../../assets/icons8-instagram-96.svg"
const Navbar = () => {
  return (
    <div className="bg-blue w-full flex justify-center items-center z-40 top-0 h-[100px]"
    >
    <div className='mr-auto ml-5 min-h-[30px] basis-[30px]' >
    <img src={insta} alt="Instagram"></img>
    </div>
   
    <div className='mr-auto font-opensans text-5xl'>
    <h1>Memories</h1>
    </div>
    
    </div>
  )
}

export default Navbar