
import { useState, useEffect, useCallback } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface AutoScrollCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
  itemClassName?: string;
  overlay?: boolean;
  renderItem?: (image: string, index: number) => React.ReactNode;
  indicators?: boolean;
  fullHeight?: boolean;
}

const AutoScrollCarousel: React.FC<AutoScrollCarouselProps> = ({
  images,
  interval = 5000,
  className = '',
  itemClassName = '',
  overlay = true,
  renderItem,
  indicators = false,
  fullHeight = false,
}) => {
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-scroll functionality
  useEffect(() => {
    if (!carouselApi || images.length <= 1) return;

    // Set up interval for auto-scrolling
    const autoScrollInterval = setInterval(() => {
      carouselApi.scrollNext();
    }, interval);

    // Clean up interval on unmount
    return () => clearInterval(autoScrollInterval);
  }, [carouselApi, images.length, interval]);

  // Update current slide index when carousel changes
  const handleSelect = useCallback(() => {
    if (!carouselApi) return;
    setCurrentSlide(carouselApi.selectedScrollSnap());
  }, [carouselApi]);

  // Set up event listeners for the carousel
  useEffect(() => {
    if (!carouselApi) return;
    
    carouselApi.on("select", handleSelect);
    carouselApi.on("reInit", handleSelect);
    
    return () => {
      carouselApi.off("select", handleSelect);
      carouselApi.off("reInit", handleSelect);
    };
  }, [carouselApi, handleSelect]);

  return (
    <Carousel
      setApi={setCarouselApi}
      opts={{
        loop: true,
        skipSnaps: false,
        align: "start"
      }}
      className={cn("w-full", fullHeight && "h-full", className)}
    >
      <CarouselContent className={cn(fullHeight ? "h-full" : "")}>
        {images.map((image, index) => (
          <CarouselItem key={index} className={cn(fullHeight && "h-full", itemClassName)}>
            {renderItem ? (
              renderItem(image, index)
            ) : (
              <div className={cn("relative w-full", fullHeight && "h-full")}>
                <img 
                  src={image} 
                  alt={`Carousel image ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                {overlay && <div className="absolute inset-0 bg-black bg-opacity-20"></div>}
              </div>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      
      {indicators && (
        <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => carouselApi?.scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                currentSlide === index 
                  ? "w-8 bg-white" 
                  : "w-2 bg-white/50 hover:bg-white/70"
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </Carousel>
  );
};

export default AutoScrollCarousel;
