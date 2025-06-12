import './SectionExplore.scss';
import { useState } from 'react';
import regions from './regions';

const earthImages = {
  default: '/images/earth/earth.png',
  asia: '/images/earth/earth.png',
  europe: '/images/earth/earth.png',
  northAmerica: '/images/earth/earth.png',
  southAmerica: '/images/earth/earth.png',
  africa: '/images/earth/earth.png',
  oceania: '/images/earth/earth.png',
  antarctica: '/images/earth/earth.png',
};

export default function SectionExplore() {
  const [activeRegion, setActiveRegion] = useState('asia');
  const [rotationCount, setRotationCount] = useState(0);

  const current = regions.find(r => r.id === activeRegion);
  const regionIndex = regions.findIndex(r => r.id === activeRegion);

  const handleNext = () => {
    const nextIndex = (regionIndex + 1) % regions.length;
    setActiveRegion(regions[nextIndex].id);
    setRotationCount(prev => prev + 1);
  };

  const handlePrev = () => {
    const prevIndex = (regionIndex - 1 + regions.length) % regions.length;
    setActiveRegion(regions[prevIndex].id);
    setRotationCount(prev => prev - 1);
  };

  return (
    <section className="section-explore">
      <h2 className="explore-title">
        用味蕾環遊世界
        <br />
        選擇一個地區，展開文化美食探索
      </h2>

      <div className="explore-map-container">
        <div className="earth-visual">
          <img
            key={activeRegion}
            src={earthImages[activeRegion] || earthImages.default}
            alt={current.name}
            className="rotating-earth"
            style={{
              transform: `rotate(${rotationCount * 60}deg)`,
              transition: 'transform 1s ease',
            }}
          />
          <div className="nav-buttons">
            <button onClick={handlePrev} className="prev-btn">← 上一區</button>
            <button onClick={handleNext} className="next-btn">下一區 →</button>
          </div>
        </div>

        <div className="region-info">
          {regions.map((region) => (
            <div
              key={region.id}
              className={`region-card ${activeRegion === region.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveRegion(region.id)}
            >
              <h3 style={{ color: region.color }}>{region.name}</h3>
              <p>{region.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
