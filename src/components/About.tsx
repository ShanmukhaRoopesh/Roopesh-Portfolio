import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiServer, FiCloud, FiTrendingUp } from 'react-icons/fi';

const highlights = [
  {
    icon: FiCode,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with React, TypeScript, and modern CSS.',
  },
  {
    icon: FiServer,
    title: 'Backend Development',
    description: 'Developing robust server-side applications with Java, Spring Boot, and microservices architecture.',
  },
  {
    icon: FiCloud,
    title: 'Cloud & DevOps',
    description: 'Deploying and managing applications on AWS with Docker, Kubernetes, and CI/CD pipelines.',
  },
  {
    icon: FiTrendingUp,
    title: 'Continuous Learning',
    description: 'Staying updated with latest technologies and best practices in software development.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-dark-secondary" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary-500/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent-500/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
              Get To Know
            </span>
            <h2 className="section-heading">About Me</h2>
            <p className="section-subheading">
              A passionate developer dedicated to creating impactful software solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Visual Section */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                {/* Background shapes */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl transform rotate-3 scale-95 opacity-20" />

                {/* Main image container */}
                <div className="relative glass-card p-8 lg:p-12">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 dark:from-primary-500/20 dark:to-accent-500/20 flex items-center justify-center overflow-hidden">
                    {/* Developer illustration using icons */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full opacity-20 blur-2xl"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        />
                      </div>
                      <div className="relative z-10 text-center">
                        <motion.div
                          className="w-24 h-24 lg:w-32 lg:h-32 mx-auto bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mb-4"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        >
                          <span className="text-4xl lg:text-5xl font-heading font-bold text-white">
                            SR
                          </span>
                        </motion.div>
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                          Shanmukha Roopesh
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <motion.div
                    className="absolute -top-4 -right-4 lg:right-8 glass-card px-4 py-2 shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="text-2xl">👨‍💻</span>
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 left-8 glass-card px-4 py-2 shadow-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <span className="text-2xl">☕</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  I am an enthusiastic Full Stack Java Developer with a strong foundation in
                  backend development, frontend technologies, cloud computing, and DevOps
                  practices. I enjoy designing efficient applications, solving real-world
                  problems, and continuously learning modern technologies.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  My goal is to contribute to innovative software solutions while growing as a
                  software engineer capable of delivering complete end-to-end applications.
                </p>
              </div>

              {/* Highlight Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="glass-card p-5 card-hover group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
