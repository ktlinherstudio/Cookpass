import { useState } from 'react';
import './RotatingEarth.scss';

const earthImages = [
  '/images/earth.png', // 預設地球（你可加更多路徑）
  '/images/earth.png',
  '/images/earth.png',
];

export default function RotatingEarth() {
  const [index, setIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const handleNext = () => {
    if (isRotating) return; // 防止多次觸發

    setIsRotating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % earthImages.length);
      setIsRotating(false);
    }, 800); // 要與動畫時長一致
  };

  return (
    <div className="earth-wrapper">
      <div className={`earth-img ${isRotating ? 'rotate' : ''}`}>
        <img src={earthImages[index]} alt="earth" />
      </div>
      <button className="next-btn" onClick={handleNext}>▶ 下一區</button>
    </div>
  );
}
