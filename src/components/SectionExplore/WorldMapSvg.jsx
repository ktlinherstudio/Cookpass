import './WorldMapSvg.scss';
import regions from './regions';

export default function WorldMapSvg({ activeRegion, setActiveRegion }) {
  return (
    <svg
      className="world-map-svg"
      viewBox="0 0 1200 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="#F7F2EA" />

      {regions.map((region) => (
        <g
          key={region.id}
          className={`region ${activeRegion === region.id ? 'active' : ''}`}
          onMouseEnter={() => setActiveRegion(region.id)}
          onMouseLeave={() => setActiveRegion(null)}
        >
          <circle cx={region.x} cy={region.y} r="40" fill={region.color} />
          <text
            x={region.x}
            y={region.y + 5}
            textAnchor="middle"
            fontSize="16"
            fill="#333"
            pointerEvents="none"
          >
            {region.shortName}
          </text>
        </g>
      ))}
    </svg>
  );
}
