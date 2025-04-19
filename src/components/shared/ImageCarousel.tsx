
import { useState, useEffect, useCallback } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  hasProgress?: boolean;
  className?: string;
  overlay?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  interval = 5000,
  hasProgress = false,
  className,
  overlay = true
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-advance carousel
  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);
  
  // Calculate progress percentage
  const progressPercentage = ((currentSlide + 1) / images.length) * 100;
  
  return (
    <div className={cn("relative w-full h-full", className)}>
      {/* Image slides */}
      {images.map((image, index) => (
        <div 
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000 bg-cover bg-center",
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          )}
          style={{ backgroundImage: `url("${image}")` }}
        />
      ))}
      
      {/* Optional overlay */}
      {overlay && <div className="absolute inset-0 bg-black/20" />}
      
      {/* Optional progress bar */}
      {hasProgress && images.length > 1 && (
        <Progress 
          value={progressPercentage} 
          className="absolute bottom-0 left-0 right-0"
        />
      )}
    </div>
  );
};

export default ImageCarousel;
