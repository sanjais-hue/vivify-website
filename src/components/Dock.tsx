import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface DockItem {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  isActive?: boolean;
}

interface DockProps {
  items: DockItem[];
  panelHeight?: number;
  baseItemSize?: number;
  magnification?: number;
}

const Dock = ({
  items,
  panelHeight = 56,
  baseItemSize = 44,
  magnification = 58,
}: DockProps) => {
  const mouseX = useMotionValue(Infinity);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      className="flex items-center gap-4 px-6 py-2 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm"
      style={{ height: panelHeight }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => {
        mouseX.set(Infinity);
        setHoveredIndex(null);
      }}
    >
      {items.map((item, index) => (
        <DockIcon
          key={index}
          item={item}
          index={index}
          mouseX={mouseX}
          baseSize={baseItemSize}
          magnification={magnification}
          isHovered={hoveredIndex === index}
          onHover={() => setHoveredIndex(index)}
        />
      ))}
    </motion.div>
  );
};

interface DockIconProps {
  item: DockItem;
  index: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  baseSize: number;
  magnification: number;
  isHovered: boolean;
  onHover: () => void;
}

const DockIcon = ({
  item,
  mouseX,
  baseSize,
  magnification,
  isHovered,
  onHover,
}: DockIconProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [baseSize, magnification, baseSize]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <div className="relative">
      <motion.button
        ref={ref}
        className={`flex items-center justify-center rounded-xl transition-colors ${
          item.isActive
            ? 'bg-[#273266] text-white shadow-md'
            : 'bg-white text-[#273266] hover:bg-[#273266] hover:text-white border border-gray-200 hover:border-[#273266]'
        }`}
        style={{ width, height: width }}
        onClick={item.onClick}
        onMouseEnter={onHover}
        whileTap={{ scale: 0.95 }}
      >
        {item.icon}
      </motion.button>

      {/* Tooltip */}
      {isHovered && (
        <motion.div
          className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#273266] text-white text-xs font-medium rounded-lg whitespace-nowrap shadow-lg z-50"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
        >
          {item.label}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#273266] rotate-45" />
        </motion.div>
      )}

      {/* Active indicator */}
      {item.isActive && (
        <motion.div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#EC2A2F] rounded-full"
          layoutId="activeIndicator"
        />
      )}
    </div>
  );
};

export default Dock;
