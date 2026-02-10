import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  separator?: string;
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
  className = '',
  startCounting,
  prefix = '',
  suffix = '',
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: duration * 1000,
  });
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  // Determine if we should start counting
  const shouldCount = startCounting !== undefined ? startCounting : isInView;

  useEffect(() => {
    if (shouldCount && !hasAnimated.current) {
      motionValue.set(to);
      hasAnimated.current = true;
    }
  }, [shouldCount, to, motionValue]);

  useEffect(() => {
    return springValue.onChange((latest) => {
      if (ref.current) {
        const formatted = Math.round(latest).toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
  }, [springValue, separator, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}{from}{suffix}
    </span>
  );
};

export default CountUp;
