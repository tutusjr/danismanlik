/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setScrollY } from '../../body/bodySlice';
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";


export default function Navbar() {

  const scrollY = useSelector((state) => state.scroll.scrollY);
  const dispatch = useDispatch();

useEffect(() => {
  // Örnek bir işlem, sayfa yüklendiğinde scrollY'yi güncelle
  dispatch(setScrollY(window.scrollY));

  const handleScroll = () => {
    // Scroll olayında scrollY'yi güncelle
    dispatch(setScrollY(window.scrollY));
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [dispatch]);

    return (
        <nav className={ ` shadow-xl z-10 lg:rounded-none transition-all duration-500 ease-in-out font-base lg:mx-16 mx-0 navbar-bg xl:h-[100px] flex justify-around items-center ${scrollY > 0 ? 'fixed h-[80px] top-0 lg:mx-auto mx-0 rounded-tl-none w-full':'lg:rounded-tl-full rounded-none lg:mt-10 mt-0'}`}>
            <div>
                <img className="h-5 w-5 bg-white" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" />
            </div>
            <div className="text-white cursor-pointer w-3/5  hidden lg:flex justify-end gap-10">
                <NavLink to="#">Anasayfa</NavLink>
                <NavLink to="#">Referanslar</NavLink>
                <NavLink to="#">Anasayfa</NavLink>
                <NavLink to="#">Anasayfa</NavLink>
                <NavLink to="#">Hakkımızda</NavLink>
            </div>
            <div className='flex bg-transparent '>
              <label htmlFor="search" className='flex'>
                <FaSearch name='search' className='text-white cursor-pointer h-full mx-1' />
                <input type='text' name='search' placeholder='Ara' className="text-white w-40 p-1 border-b bg-transparent border-white focus:border-red-600 transition-colors ease-in-out"/>
              </label>
            </div>
        </nav>
    )
}