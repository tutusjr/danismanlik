/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setScrollY } from '../../body/bodySlice';
import { Link } from 'react-router-dom';


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
        <nav className={ ` shadow-xl z-10 transition-all duration-500 ease-in-out font-base mx-16 navbar-bg h-[100px] flex justify-around items-center ${scrollY > 0 ? 'fixed h-[80px] top-0 mx-auto rounded-tl-none w-full':'rounded-tl-full mt-10'}`}>
            <div>
                <img className="h-5 w-5 bg-white" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" />
            </div>
            <div className="text-white cursor-pointer bg-red-500 flex justify-end gap-10">
                <Link to="#">Anasayfa</Link>
                <Link to="#">Referanslar</Link>
                <Link to="#">Anasayfa</Link>
                <Link to="#">Anasayfa</Link>
                <Link to="#">Hakkımızda</Link>
            </div>
            <div>
                <p className="text-white">search</p>
            </div>
        </nav>
    )
}