'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface InterventionCardProps {
  title: string;
  description: string;
  icon?: ReactNode; // For the spear, shield, or mask SVGs
  index?: number;   // Used to stagger animations if mapped in a list
  actionText?: string;
  onActionClick?: () => void;
}

export default function InterventionCard({
  title,
  description,
  icon,
  index = 0,
  actionText = "Learn More",
  onActionClick
}: InterventionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="group relative bg-[#FFFFFF] border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#AF150B] transition-all duration-300 flex flex-col h-full"
    >
      {/* Icon Wrapper - Uses Gray Orange with low opacity for background, Vivid Red for the icon */}
      {icon && (
        <div className="w-14 h-14 rounded-full bg-[#E4AD7A]/20 flex items-center justify-center text-[#AF150B] mb-6 group-hover:scale-110 group-hover:bg-[#E4AD7A]/40 transition-all duration-300">
          {icon}
        </div>
      )}

      {/* Content - Poppins Headings and Body */}
      <div className="flex-grow">
        <h3 className="font-heading font-bold text-2xl text-[#000000] mb-4 leading-tight">
          {title}
        </h3>
        <p className="font-body font-medium text-[#000000]/80 text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Action Button - Anchored to the bottom */}
      <div className="pt-8 mt-auto">
        <button 
          onClick={onActionClick}
          className="font-heading font-semibold text-[#AF150B] flex items-center gap-2 group-hover:text-[#000000] transition-colors"
        >
          {actionText}
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            →
          </motion.span>
        </button>
      </div>
    </motion.div>
  );
}