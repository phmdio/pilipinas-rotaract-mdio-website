
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface UseAnimationProps {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

/**
 * Hook for handling animations triggered by element visibility
 */
export const useAnimation = ({
  threshold = 0.1,
  triggerOnce = true,
  delay = 0
}: UseAnimationProps = {}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  return { ref, isVisible };
};
