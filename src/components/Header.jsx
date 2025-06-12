import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [show, setShow] = useState(!isHome);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setShow(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <header className={`main-header ${show ? 'scrolled' : ''}`}>
      <div className={`logo-area ${show ? 'show' : ''}`}>
        <img src="./images/Icons/nav-logo.svg" alt="logo" className="logo" />
      </div>
      <div className="icon-area">
        {/* <img src={`${import.meta.env.BASE_URL}images/Icons/nav-home-default.svg`} alt="home" /> */}
        <img src={`${import.meta.env.BASE_URL}images/Icons/nav-search-default.svg`} alt="search" />
        <img src={`${import.meta.env.BASE_URL}images/Icons/nav-member-default.svg`} alt="member" />
        <img src={`${import.meta.env.BASE_URL}images/Icons/nav-bookmark-default.svg`} alt="bookmark" />
        <img src={`${import.meta.env.BASE_URL}images/Icons/nav-mymap-default.svg`} alt="map" />
      </div>
    </header>
  );
}
