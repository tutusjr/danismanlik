/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setScrollY } from '../../body/bodySlice';
import { NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";


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
            <nav className={ `shadow-3xl border-b z-10 border-[#ffa500] transition-all duration-300 ease-in-out font-base flex lg:justify-around justify-between items-center ${scrollY > 0 ? 'fixed bg-[black] h-[70px] border-none top-0 w-full':'h-[70px] navbar-bg relative lg:h-[70px]'}`}>
            <div>
                <img className="h-5 w-5 bg-white ml-10 lg:ml-auto" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" />
            </div>
            <div className="text-white cursor-pointer w-3/5 hidden lg:flex justify-end gap-10">
                <NavLink to="/">Anasayfa</NavLink>
                <NavLink to="/referans">Referanslar</NavLink>
                <NavLink to="/galeri">Galeri</NavLink>
                <NavLink to="/iletisim">İletişim</NavLink>
                <NavLink to="/hakkimizda">Hakkımızda</NavLink>
            </div>
            <div className='flex bg-transparent  right-0'>
              <label htmlFor="search" className='flex'>
                <FaSearch name='search' className='text-white cursor-pointer h-full mx-1' />
                <input type='text' name='search' placeholder='Ara' className="text-white hidden lg:flex w-40 p-1 border-b bg-transparent border-white focus:border-[#ffa500] transition-colors ease-in-out"/>
              </label>
              <IoIosMenu 
              
              className='lg:hidden text-white h-[35px] w-[50px]' />
            </div>
        </nav>
    )
}