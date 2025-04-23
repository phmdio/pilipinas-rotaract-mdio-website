import React from 'react';

interface NoDataProps {
  message?: string;
}

const NoData = ({ message = "No data available at the moment. Please check back later." }: NoDataProps) => {
  return (
    <div className="py-16 flex flex-col items-center justify-center">
      <div className="rounded-full bg-gray-100 p-6 mb-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-12 w-12 text-gray-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" 
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">No Data Available</h3>
      <p className="text-gray-500 text-center max-w-md">{message}</p>
    </div>
  );
};

export default NoData; 