import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function Footer() {
  const [ref, inView] = useInView(0.5)

  return (
    <footer className="py-8 sm:py-10 border-t border-[var(--color-dark-border)] bg-[var(--color-dark)]" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="font-display font-bold text-lg text-white">
          PB<span className="text-[var(--color-accent-teal)]">.</span>
        </p>
        <p className="text-xs sm:text-sm text-[var(--color-muted)]">
          &copy; 2024 &mdash; Present &middot; Priyabrata Panda
        </p>
        <a
          href="https://pbtechhub.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-[var(--color-muted)] hover:text-[var(--color-accent-teal)] transition-colors"
        >
          pbtechhub.com
        </a>
      </motion.div>
    </footer>
  )
}
