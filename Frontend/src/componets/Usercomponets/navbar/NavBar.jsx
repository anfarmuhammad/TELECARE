import React, { useState } from 'react';
import Logo from '/src/assets/user/logo.png';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div >
      <div className="w-full h-16  bg-blue-800 flex items-center justify-between px-4 z-10 md:px-10 fixed">
        <img className="w-20 h-full md:ml-[-40px]" src={Logo} alt="logo" />
        <button onClick={toggleMenu}
          className="text-white md:hidden text-2xl"
          aria-label="Toggle Menu">☰
        </button>
        <ul className="hidden md:flex mr-[500px] flex-row gap-10 font-bold text-white mt-3">
          <li>MEDICAL ARTICLES <i class="fa-solid fa-caret-down"></i></li>
          <li>CONSULT A PHYSICIAN</li>
          <li>ABOUT</li>
          <input className='bg-white h-[40px] text-black rounded-full p-1 mb-1' type="text" placeholder='Search for symptoms' />
          
        </ul>
        
        <div className="hidden md:flex gap-8 text-white text-[15px]">
          <button>LOGIN</button>
          <button>SIGNUP</button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex  flex-col bg-blue-700 md:hidden pt-11">
          <ul className="flex flex-col gap-4 p-4 font-bold text-white">
            <li>Medical Articles<i class="fa-solid fa-caret-down"></i></li>
            <li>Consult a Physician</li>
            <li>ABOUT</li>
            <input className='bg-white h-[40px] text-black rounded-full p-1' type="text" placeholder='Search for symptoms' />
          </ul>
          <div className="flex flex-col items-start gap-4 p-4 text-white text-[15px] ">
            <button>LOGIN</button>
            <button>SIGNUP</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
