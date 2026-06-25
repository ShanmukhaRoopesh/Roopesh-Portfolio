import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload, FiArrowRight, FiMail } from 'react-icons/fi';
import { FaJava, FaReact, FaDocker, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiKubernetes, SiTerraform, SiJenkins } from 'react-icons/si';

const techStack = [
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'React.js', icon: FaReact, color: '#61DAFB' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
  { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 dark:from-dark-primary dark:via-dark-secondary dark:to-dark-tertiary" />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Greeting Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-gray-700 dark:text-gray-300">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-4"
          >
            <span className="text-gray-900 dark:text-white">Shanmukha</span>{' '}
            <span className="gradient-text">Roopesh</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            variants={itemVariants}
            className="h-12 sm:h-14 mb-6 flex items-center justify-center"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">
              <TypeAnimation
                sequence={[
                  'Full Stack Java Developer',
                  2000,
                  'Spring Boot Developer',
                  2000,
                  'React Developer',
                  2000,
                  'DevOps Engineer',
                  2000,
                  'Cloud Enthusiast',
                  2000,
                  'Software Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary-600 dark:text-primary-400 font-semibold"
              />
            </span>
          </motion.div>

          {/* Introduction */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Passionate Full Stack Java Developer focused on building scalable enterprise
            applications using Java, Spring Boot, React, DevOps, and Cloud technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#"
              className="btn-primary flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload size={18} />
              Download Resume
            </motion.a>
            <motion.a
              href="#projects"
              className="btn-secondary flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/10 rounded-xl transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <FiMail size={18} />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Tech Stack Slider */}
          <motion.div variants={itemVariants} className="relative">
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 font-medium uppercase tracking-wider">
              Technologies I Work With
            </p>
            <div className="overflow-hidden relative">
              <div className="flex gap-8 animate-[scroll_20s_linear_infinite]">
                {[...techStack, ...techStack].map((tech, index) => (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0 flex flex-col items-center gap-2 px-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    <tech.icon size={40} style={{ color: tech.color }} />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-primary-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
