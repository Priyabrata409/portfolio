import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { Mail, Phone, ArrowUpRight } from 'lucide-react'

function LinkedinIcon({ size = 18, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function GithubIcon({ size = 18, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

const contactLinks = [
  {
    href: 'mailto:priyabrata409@gmail.com',
    icon: Mail,
    label: 'Email',
    value: 'priyabrata409@gmail.com',
    accent: 'var(--color-accent-teal)',
  },
  {
    href: 'tel:+919348429088',
    icon: Phone,
    label: 'Phone',
    value: '+91-9348429088',
    accent: 'var(--color-accent-coral)',
  },
  {
    href: 'https://www.linkedin.com/in/priyabratapanda-5071',
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'priyabratapanda-5071',
    accent: '#60a5fa',
    external: true,
  },
  {
    href: 'https://github.com/priyabrata-panda',
    icon: GithubIcon,
    label: 'GitHub',
    value: 'priyabrata-panda',
    accent: '#e4e4e7',
    external: true,
  },
]

export default function Contact() {
  const [ref, inView] = useInView(0.2)

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-36 bg-[var(--color-dark)] grid-bg" ref={ref}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 text-white">
            Let's Connect
          </h2>
          <p className="text-[var(--color-muted)] max-w-md mx-auto mb-12 sm:mb-16 text-sm sm:text-base">
            Always open to connecting with teams and individuals interested in AI agents,
            platform engineering, and scalable distributed systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto"
        >
          {contactLinks.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-dark-card)] border border-[var(--color-dark-border)] hover:border-gray-600 transition-all duration-300 group card-glow"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `color-mix(in srgb, ${item.accent} 12%, transparent)` }}
                >
                  <Icon size={16} style={{ color: item.accent }} />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-[10px] sm:text-xs text-[var(--color-muted)] uppercase tracking-wider">{item.label}</p>
                  <p className="text-xs sm:text-sm font-medium text-gray-200 truncate">{item.value}</p>
                </div>
                <ArrowUpRight size={14} className="ml-auto text-gray-600 group-hover:text-gray-300 transition-colors flex-shrink-0" />
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
