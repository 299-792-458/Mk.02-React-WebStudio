'use client';

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Home, User, Briefcase, Mail, Zap } from 'lucide-react';

const dockItems = [
  { id: 'home', icon: Home, label: 'Home', href: '/' },
  { id: 'work', icon: Briefcase, label: 'Work', href: '/#work' },
  { id: 'about', icon: User, label: 'About', href: '/about' },
  { id: 'services', icon: Zap, label: 'Services', href: '/#services' },
  { id: 'contact', icon: Mail, label: 'Contact', href: '/contact' },
];

export default function FloatingDock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[1000] hidden md:flex">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex h-16 items-end gap-4 rounded-2xl bg-white/5 px-4 pb-3 border border-white/10 backdrop-blur-2xl shadow-2xl"
      >
        {dockItems.map((item) => (
          <DockIcon key={item.id} mouseX={mouseX} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

function DockIcon({ mouseX, item }: { mouseX: MotionValue; item: typeof dockItems[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const Icon = item.icon;

  return (
    <Link href={item.href}>
      <motion.div
        ref={ref}
        style={{ width }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="aspect-square w-10 rounded-full bg-white/10 border border-white/5 flex items-center justify-center relative group hover:bg-white/20 transition-colors"
      >
        <Icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
        
        {/* Tooltip */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -12 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/80 text-white text-[10px] whitespace-nowrap border border-white/10 backdrop-blur-md"
          >
            {item.label}
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
}
