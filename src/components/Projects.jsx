import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { ExternalLink, Mic, Flag, Layers, Wifi, ArrowRightLeft } from 'lucide-react'

const projects = [
  {
    title: 'AutoCaption App',
    description: 'AI-powered live captioning application that generates subtitles for audio and video content in real-time.',
    link: 'https://auto-captions.pbtechhub.com/',
    tags: ['Python', 'FastAPI', 'React', 'AI/ML'],
    icon: Mic,
    accent: 'var(--color-accent-teal)',
    live: true,
  },
  {
    title: 'Feature-Flag Service',
    description: 'Distributed microservice integrating LaunchDarkly for company-wide feature flags with Kafka Pub/Sub model handling 1,000 RPS.',
    tags: ['FastAPI', 'Kafka', 'LaunchDarkly', 'Python'],
    icon: Flag,
    accent: 'var(--color-accent-purple)',
  },
  {
    title: 'AI Template Suggestion',
    description: 'NLP-driven email template suggestion system that improved customer support efficiency by 40% using semantic search.',
    tags: ['Python', 'NLP', 'OpenSearch', 'FastAPI'],
    icon: Layers,
    accent: 'var(--color-accent-yellow)',
  },
  {
    title: 'WebSocket Debounce',
    description: 'Stabilized WebSocket infrastructure with custom rate-limiting logic using PHP, Kafka, and DynamoDB.',
    tags: ['PHP', 'Kafka', 'DynamoDB', 'WebSocket'],
    icon: Wifi,
    accent: 'var(--color-accent-coral)',
  },
  {
    title: 'Beanstalk to RabbitMQ',
    description: 'Migrated major PHP Beanstalk publishers and consumers to RabbitMQ-based queues with zero production downtime.',
    tags: ['PHP', 'RabbitMQ', 'Migration'],
    icon: ArrowRightLeft,
    accent: 'var(--color-accent-green)',
  },
]

export default function Projects() {
  const [ref, inView] = useInView(0.05)

  return (
    <section id="projects" className="py-20 sm:py-28 md:py-36 grid-bg bg-[var(--color-dark)]" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 text-white">
            Projects
          </h2>
          <p className="text-[var(--color-muted)] max-w-md mx-auto text-sm sm:text-base">
            Systems I've built — from AI services to distributed infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative p-5 sm:p-6 rounded-2xl bg-[var(--color-dark-card)] border border-[var(--color-dark-border)] card-glow transition-all duration-300"
              >
                {project.live && (
                  <span className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-semibold text-[var(--color-accent-green)] bg-[var(--color-accent-green)]/10 px-2.5 py-1 rounded-full border border-[var(--color-accent-green)]/20 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-[var(--color-accent-green)] rounded-full animate-pulse" />
                    Live
                  </span>
                )}

                <div
                  className="w-10 h-10 rounded-xl bg-[var(--color-dark-surface)] border border-[var(--color-dark-border)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon size={18} style={{ color: project.accent }} />
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg mb-2 text-white">{project.title}</h3>
                <p className="text-[var(--color-muted)] text-xs sm:text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-[var(--color-dark-surface)] border border-[var(--color-dark-border)] rounded text-[10px] sm:text-xs font-medium text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--color-accent-teal)] hover:underline group/link"
                  >
                    Visit <ExternalLink size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
