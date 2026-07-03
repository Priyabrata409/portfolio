import { motion } from 'framer-motion'

export default function Sticker({ label, color, textColor = 'text-[var(--color-dark)]', className = '', delay = 0, rotate = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: rotate - 15 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ delay, type: 'spring', stiffness: 180, damping: 14 }}
      whileHover={{ scale: 1.12, rotate: rotate - 3 }}
      className={`sticker inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-display font-bold text-xs sm:text-sm shadow-lg ${color} ${textColor} ${className}`}
    >
      {label}
    </motion.div>
  )
}
