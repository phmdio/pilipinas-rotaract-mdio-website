import React from 'react';
import { Link } from 'react-router-dom';
import { BaseDistrict } from '@/lib/contentful';

interface DistrictCardProps {
  district: BaseDistrict;
  index: number;
}

const DistrictCard = ({ district, index }: DistrictCardProps) => {
  return (
    <Link 
      to={`/district/${district.id}`}
      className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer block"
      style={{ 
        animationDelay: `${index * 0.1}s`
      }}
      aria-label={`View District ${district.id} details`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${district.image})` }}>
        <div className="absolute inset-0 opacity-75" style={{ backgroundColor: `${district.color}` }}></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        <p className="text-sm font-medium mb-1 opacity-90">Rotaract Clubs of Rotary International District #</p>
        <h4 className="text-5xl font-bold">{district.id}</h4>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  );
};

export default DistrictCard;
