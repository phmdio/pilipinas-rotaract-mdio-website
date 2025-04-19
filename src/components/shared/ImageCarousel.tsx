
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import AutoScrollCarousel from './AutoScrollCarousel';

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
  if (images.length <= 0) {
    return null;
  }
  
  return (
    <div className={cn("relative w-full h-full", className)}>
      <AutoScrollCarousel
        images={images}
        interval={interval}
        fullHeight={true}
        overlay={overlay}
        renderItem={(image, index) => (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url("${image}")` }}
          />
        )}
      />
      
      {/* Optional progress bar */}
      {hasProgress && images.length > 1 && (
        <Progress 
          value={((1 / images.length) * 100)} 
          className="absolute bottom-0 left-0 right-0"
        />
      )}
    </div>
  );
};

export default ImageCarousel;
