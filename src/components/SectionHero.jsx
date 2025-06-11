import { useEffect, useState } from 'react';
import './SectionHero.scss';

export default function SectionHero() {
  const [isMobile, setIsMobile] = useState(false);
  const [logoStage, setLogoStage] = useState(1);

  // 響應式切換影片
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 控制 logo 動畫階段切換
  useEffect(() => {
    const step2 = setTimeout(() => setLogoStage(2), 1200);
    const step3 = setTimeout(() => setLogoStage(3), 2200);
    return () => {
      clearTimeout(step2);
      clearTimeout(step3);
    };
  }, []);

  return (
    <section className="section-hero">
      <video
        className="hero-video"
        src={isMobile ? '/videos/hero-mobile.mp4' : '/videos/hero-desktop.mp4'}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
      />

      <div className="hero-logo-container">
        {logoStage === 1 && <img src="/images/logo1.svg" alt="logo book" />}
        {logoStage === 2 && (
          <img src="/images/logo2.svg" alt="logo spatula" className="slide-spatula" />
        )}
        {logoStage === 3 && (
          <img src="/images/logo3.svg" alt="final logo" className="fadein-text" />
        )}
      </div>

      <div className="scroll-hint">
        <span className="arrow-down" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
