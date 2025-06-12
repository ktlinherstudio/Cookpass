import './SectionExplore.scss';
import { useState } from 'react';
import regions from './regions';

export default function SectionExplore() {
  const [activeIndex, setActiveIndex] = useState(0);
  const regionList = regions;
  const activeRegion = regionList[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % regionList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + regionList.length) % regionList.length);
  };

  return (
    <section className="section-explore">
      <div className="explore-map-container">
        <div className="earth-visual">
          <img
            src={`./images/earth/earth.png`}
            alt={activeRegion.name}
          />
        </div>

        <div className="region-info">
          <div className="region-header">
          <button className="nav-btn" onClick={handlePrev}>
  <div className="btn-icon-left"></div>
</button>
            <h2 style={{ color: activeRegion.color }}>{activeRegion.name}</h2>
           <button className="nav-btn" onClick={handleNext}>
   <div className="btn-icon-right"></div>
</button>
          </div>
          <p className="region-description">{activeRegion.description}</p>
          <button className="explore-button">探索各地食譜</button>

          <div className="recipe-carousel">
            {activeRegion.recipes?.map((recipe, index) => (
              <img
                key={index}
                src={recipe.image}
                alt={recipe.name}
                className="carousel-item"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
