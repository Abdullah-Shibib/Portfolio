import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './InteractiveMap.css';

const InteractiveMap = () => {
  const [hoveredPin, setHoveredPin] = useState(null);

  const locations = [
    {
      id: 'ottawa',
      name: 'Ottawa, Ontario',
      description: 'Where I live',
      x: 18, // More accurate position for Ottawa (North America, eastern Canada)
      y: 28,
      color: '#dc2626'
    },
    {
      id: 'baghdad',
      name: 'Baghdad, Iraq',
      description: 'Where I was born',
      x: 56, // Moved slightly left
      y: 36.5, // Moved up by 0.5% more
      color: '#dc2626'
    }
  ];

  return (
    <motion.div
      className="interactive-map"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="map-container">
        <div className="world-map">
          {/* World map image */}
          <img 
            src="/world-map.png" 
            alt="World Map" 
            className="map-image"
            onError={(e) => {
              console.log('Image failed to load, trying alternative path');
              e.target.src = './world-map.png';
            }}
          />
          
          {/* Digital grid overlay */}
          <div className="digital-grid">
            <div className="grid-line horizontal" style={{top: '20%'}}></div>
            <div className="grid-line horizontal" style={{top: '40%'}}></div>
            <div className="grid-line horizontal" style={{top: '60%'}}></div>
            <div className="grid-line horizontal" style={{top: '80%'}}></div>
            <div className="grid-line vertical" style={{left: '20%'}}></div>
            <div className="grid-line vertical" style={{left: '40%'}}></div>
            <div className="grid-line vertical" style={{left: '60%'}}></div>
            <div className="grid-line vertical" style={{left: '80%'}}></div>
          </div>
          
          {/* Digital coordinates */}
          <div className="coordinates">
            <div className="coord-label" style={{top: '5%', left: '5%'}}>N 45°</div>
            <div className="coord-label" style={{top: '5%', right: '5%'}}>N 30°</div>
            <div className="coord-label" style={{bottom: '5%', left: '5%'}}>S 30°</div>
            <div className="coord-label" style={{bottom: '5%', right: '5%'}}>S 45°</div>
          </div>
          
          {/* Location pins */}
          {locations.map((location) => (
                          <motion.div
                key={location.id}
                className={`map-pin ${location.id}`}
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                  '--pin-color': location.color
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredPin(location.id)}
                onMouseLeave={() => setHoveredPin(null)}
              >
              <FaMapMarkerAlt className="pin-icon" />
              
              {/* Pin tooltip */}
              <motion.div
                className="pin-tooltip"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: hoveredPin === location.id ? 1 : 0,
                  y: hoveredPin === location.id ? 0 : 10
                }}
                transition={{ duration: 0.2 }}
              >
                <h4>{location.name}</h4>
                <p>{location.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveMap;
