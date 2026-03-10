'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // 1. Initial State: Start slightly lower and completely transparent
      initial={{ opacity: 0, y: 15 }}
      
      // 2. Animate To: Glide up to its natural position and fade in
      animate={{ opacity: 1, y: 0 }}
      
      // 3. The Transition: A highly polished, non-bouncy ease curve
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for a premium "Apple-like" snap
      }}
      className="flex flex-col w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}