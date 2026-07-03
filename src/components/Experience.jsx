import { motion } from 'framer-motion'
import { useInView } from './useInView'

const experiences = [
  {
    company: 'Coupa',
    role: 'Senior Software Engineer, AI Platform',
    period: 'Oct 2025 - Present',
    location: 'Bengaluru, India',
    accent: 'var(--color-accent-teal)',
    bullets: [
      'Spearheaded full lifecycle management of a core GenAI proxy service, integrating Azure OpenAI and AWS Bedrock models for high availability.',
      'Engineered comprehensive monitoring and logging framework for Agent performance — real-time visibility into latency, token usage, and response accuracy.',
    ],
  },
  {
    company: 'MicroStrategy',
    role: 'Software Engineer',
    period: 'Nov 2024 - Oct 2025',
    location: 'Pune, India',
    accent: 'var(--color-accent-purple)',
    bullets: [
      'Led a team of 4 to migrate repos across organizations, integrating Jenkins pipelines for SonarCloud and GHAS inspections.',
      'Integrated sleep functionality using Python and CronJob, achieving $1,700/month savings in EKS.',
      'Upgraded Python version of five critical repositories with zero downtime.',
    ],
  },
  {
    company: 'Hiver',
    role: 'Software Engineer',
    period: 'Jul 2021 - Nov 2024',
    location: 'Bengaluru, India',
    accent: 'var(--color-accent-coral)',
    bullets: [
      'Developed NLP-driven email template suggestion system using Python, FastAPI, and OpenSearch — 40% improvement in support efficiency.',
      'Migrated core services from EC2 to Kubernetes — 20% performance improvement.',
      'Built feature-flag service with LaunchDarkly, Kafka Pub/Sub model, and 1,000 RPS FastAPI service.',
      'Designed RAG-based semantic search service using OpenSearch as vector database.',
      'Delivered AI "thank-you detection" feature — 99% precision, closing 10% of conversations automatically.',
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView(0.05)

  return (
    <section id="experience" className="py-20 sm:py-28 md:py-36 bg-[var(--color-dark)] grid-bg" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 text-white">
            Experience
          </h2>
          <p className="text-[var(--color-muted)] max-w-md mx-auto text-sm sm:text-base">
            Building impactful systems at scale across AI, backend, and platform engineering
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2 }}
              className="bg-[var(--color-dark-card)] rounded-2xl p-5 sm:p-7 md:p-8 border border-[var(--color-dark-border)] card-glow transition-all duration-300"
              style={{ borderLeftWidth: '3px', borderLeftColor: exp.accent }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: exp.accent }} />
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white">{exp.company}</h3>
                  </div>
                  <p className="text-[var(--color-muted)] font-medium text-sm sm:text-base ml-5">{exp.role}</p>
                </div>
                <div className="text-xs sm:text-sm text-[var(--color-muted)] ml-5 sm:ml-0 sm:text-right whitespace-nowrap">
                  <p>{exp.period}</p>
                  <p className="text-gray-600">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-3 ml-5">
                {exp.bullets.map((bullet, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: i * 0.15 + j * 0.05 + 0.3 }}
                    className="text-gray-400 text-xs sm:text-sm leading-relaxed pl-4 border-l border-[var(--color-dark-border)]"
                  >
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
