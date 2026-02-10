import { useEffect, useState, useRef, useCallback } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  separator?: string;
  direction?: 'up' | 'down';
  className?: string;
  startCounting?: boolean;
  prefix?: string;
  suffix?: string;
}

const CountUp = ({
  from = 0,
  to,
  duration = 2,
  separator = '',
  direction = 'up',
  className = '',
  startCounting,
  prefix = '',
  suffix = '',
}: CountUpProps) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  // Determine if we should start counting
  const shouldCount = startCounting !== undefined ? startCounting : isInView;

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startValue = direction === 'up' ? from : to;
    const endValue = direction === 'up' ? to : from;
    const difference = endValue - startValue;
    
    const steps = 60;
    const stepDuration = (duration * 1000) / steps;
    let step = 0;
    
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease out cubic for smooth animation
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const newValue = Math.round(startValue + difference * easeProgress);
      setCount(newValue);

      if (step >= steps) {
        setCount(endValue);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [from, to, duration, direction]);

  useEffect(() => {
    if (shouldCount && !hasAnimated.current) {
      animate();
    }
  }, [shouldCount, animate]);

  const formatNumber = (num: number) => {
    if (separator) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }
    return num.toString();
  };

  return (
    <span ref={ref} className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

export default CountUp;
