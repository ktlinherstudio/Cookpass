import { useEffect, useState } from 'react';
import './SectionHero.scss';

export default function SectionHero() {
  const [isMobile, setIsMobile] = useState(false);
  const [logoStage, setLogoStage] = useState(1);
  const [sloganVisible, setSloganVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer2 = setTimeout(() => setLogoStage(2), 1000);
    const timer3 = setTimeout(() => setLogoStage(3), 2000);
    const timer4 = setTimeout(() => setSloganVisible(true), 3000);
    return () => {
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <section className="section-hero">
      <video
        className="hero-video"
        src={isMobile ? './videos/hero-mobile.mp4' : './videos/hero-desktop.mp4'}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="hero-logo-wrapper">
        <div className="hero-logo-container">
          <img
            src="./images/Icons/logo1.svg"
            alt="book"
            className={`logo1 ${logoStage === 1 ? 'fade-in' : 'fade-out'}`}
          />
          <img
            src="./images/Icons/logo2.svg"
            alt="spatula"
            className={`logo2 ${logoStage >= 2 ? 'fade-in spatula' : ''}`}
          />
          <img
            src="./images/Icons/logo3.svg"
            alt="text"
            className={`logo3 ${logoStage >= 3 ? 'fade-in-text' : ''}`}
          />
        </div>
        <div className={`hero-slogan ${sloganVisible ? 'show' : ''}`}>
          從餐桌起飛 － 每次下廚，都是一段文化旅途
        </div>
      </div>


      <div className="scroll-hint">
        <img src={`${import.meta.env.BASE_URL}images/Icons/scrollhint1.svg`} alt="scroll" className="scroll-1" />
        <img src={`${import.meta.env.BASE_URL}images/Icons/scrollhint2.svg`} alt="scroll" className="scroll-2" />
      </div>
    </section>
  );
}