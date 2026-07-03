import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Sticker from './Sticker'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-dark)] grid-bg">
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--color-accent-teal)]/5 rounded-full blur-[120px] animate-glow pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--color-accent-purple)]/5 rounded-full blur-[100px] animate-glow pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32 relative w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xs sm:text-sm font-medium text-[var(--color-muted)] uppercase tracking-[0.2em] mb-5"
            >
              Senior AI Software Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-extrabold text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] leading-[1.1] tracking-tight mb-6"
            >
              <span className="text-white">PRIYABRATA</span>
              <br />
              <span className="text-gradient">PANDA</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-xl mx-auto lg:mx-0 mb-10"
            >
              <p className="text-[var(--color-muted)] text-sm sm:text-base leading-relaxed">
                I specialize in designing and deploying scalable backend systems
                and AI solutions that drive measurable product outcomes.
              </p>
              <p className="text-[var(--color-muted)] text-sm sm:text-base leading-relaxed">
                Building real-time AI services, optimizing platform infrastructure,
                and migrating core workloads to Kubernetes.
              </p>
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white border-b-2 border-[var(--color-accent-teal)] pb-1 hover:text-[var(--color-accent-teal)] transition-colors"
            >
              Get in Touch <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] flex-shrink-0">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 rounded-[50px] sm:rounded-[60px] overflow-hidden"
            >
              <div className="absolute inset-0 blob-shape bg-gradient-to-br from-[var(--color-dark-card)] to-[var(--color-dark-surface)] border border-[var(--color-dark-border)]" />
              <div className="absolute inset-0 grid-bg opacity-50" />
            </motion.div>

            <Sticker
              label="AI Agents"
              color="bg-[var(--color-accent-teal)]"
              className="absolute top-4 left-4 sm:top-6 sm:left-6 animate-float"
              delay={0.7}
              rotate={-8}
            />
            <Sticker
              label="LLMOps"
              color="bg-[var(--color-accent-coral)]"
              className="absolute top-12 right-4 sm:top-16 sm:right-6 animate-float-delay"
              delay={0.8}
              rotate={5}
            />
            <Sticker
              label="Python & FastAPI"
              color="bg-[var(--color-accent-yellow)]"
              className="absolute bottom-24 left-4 sm:bottom-28 sm:left-6 animate-float-delay-2"
              delay={0.9}
              rotate={-4}
            />
            <Sticker
              label="Kubernetes"
              color="bg-[var(--color-accent-purple)]"
              className="absolute bottom-6 right-8 sm:bottom-10 sm:right-12 animate-float"
              delay={1.0}
              rotate={6}
            />
            <Sticker
              label="AWS & Azure"
              color="bg-[var(--color-accent-green)]"
              className="absolute top-1/2 -translate-y-1/2 right-1/3 animate-float-delay"
              delay={1.1}
              rotate={-2}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-[var(--color-muted)] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
