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
    <header className={`main-header ${show ? 'show' : ''}`}>
      <div className="logo-area">
        <img src={`${import.meta.env.BASE_URL}images/Icons/logo1.svg`} alt="logo" className="logo" />
        <span className="title">自煮旅圖</span>
      </div>
      <div className="icon-area">
        <img src={`${import.meta.env.BASE_URL}images/Icons/icon-search.svg`} alt="search" />
        <img src={`${import.meta.env.BASE_URL}images/Icons/icon-user.svg`} alt="user" />
        <img src={`${import.meta.env.BASE_URL}images/Icons/icon-bookmark.svg`} alt="bookmark" />
        <img src={`${import.meta.env.BASE_URL}images/Icons/icon-map.svg`} alt="map" />
      </div>
    </header>
  );
}
