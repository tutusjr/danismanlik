/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setScrollY } from '../../body/bodySlice';

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
        <nav className={ ` shadow-xl transition-all duration-300 ease-in-out font-base mt-10 mx-16 navbar-bg h-[100px] flex justify-around items-center ${scrollY > 0 ? 'fixed h-[80px] -mt-[80px] mx-auto rounded-tl-none w-full':'rounded-tl-full'}`}>
            <div>
                <img className="h-5 w-5 bg-white" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" />
            </div>
            <div className="text-white bg-red-500 ml- flex justify-end gap-10 w-fit">
                <p>Anasayfa</p>
                <p>Referanslar</p>
                <p>Anasayfa</p>
                <p>Anasayfa</p>
                <p>Hakkımızda</p>
            </div>
            <div>
                <p className="text-white">search</p>
            </div>
        </nav>
    )
}