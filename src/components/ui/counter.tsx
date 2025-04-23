import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true }); // triggers only once

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = parseInt(value);
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>{count.toLocaleString()}</span>
  );
};

export { Counter };
