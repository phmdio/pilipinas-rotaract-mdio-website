
import React from 'react';

interface DistrictCardProps {
  district: {
    id: string;
    color: string;
    image: string;
    description: string;
  };
  index: number;
}

const DistrictCard = ({ district, index }: DistrictCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg aspect-square"
      style={{ 
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${district.image})` }}>
        <div className="absolute inset-0 opacity-75" style={{ backgroundColor: `${district.color}` }}></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        <p className="text-sm font-medium mb-1 opacity-90">{district.description}</p>
        <h4 className="text-5xl font-bold">{district.id}</h4>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default DistrictCard;
