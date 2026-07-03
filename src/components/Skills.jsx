import { motion } from 'framer-motion'
import { useInView } from './useInView'

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'PHP'],
    accent: 'var(--color-accent-teal)',
  },
  {
    title: 'Frameworks & AI',
    items: ['FastAPI', 'Django', 'Node.js', 'RAG', 'AI Agents', 'Azure OpenAI', 'AWS Bedrock'],
    accent: 'var(--color-accent-coral)',
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MongoDB', 'DynamoDB', 'Cassandra', 'Redis', 'OpenSearch'],
    accent: 'var(--color-accent-yellow)',
  },
  {
    title: 'DevOps & Cloud',
    items: ['Kubernetes', 'Docker', 'AWS', 'Azure', 'Terraform', 'CI/CD', 'Kafka', 'RabbitMQ'],
    accent: 'var(--color-accent-purple)',
  },
]

export default function Skills() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="skills" className="py-20 sm:py-28 md:py-36 bg-[var(--color-dark)] grid-bg" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 text-white">
            Tech Stack
          </h2>
          <p className="text-[var(--color-muted)] max-w-md mx-auto text-sm sm:text-base">
            Tools and technologies I use to build scalable, production-grade systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="p-5 sm:p-6 rounded-2xl bg-[var(--color-dark-card)] border border-[var(--color-dark-border)] card-glow transition-all duration-300"
              style={{ borderLeftWidth: '3px', borderLeftColor: group.accent }}
            >
              <h3 className="font-display font-semibold text-base sm:text-lg mb-4 text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-[var(--color-dark-surface)] rounded-lg text-xs sm:text-sm font-medium text-gray-300 border border-[var(--color-dark-border)] hover:border-gray-500 transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
