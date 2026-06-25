import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiCalendar } from 'react-icons/fi';
import { HiAcademicCap } from 'react-icons/hi';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  cgpa?: string;
  icon: typeof HiAcademicCap;
}

const educationData: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Pursuing MCA',
    year: '2026 Pass Out',
    cgpa: '7.8',
    icon: HiAcademicCap,
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Completed BCA',
    year: 'Graduated',
    cgpa: '7.89',
    icon: HiAcademicCap,
  },
  {
    degree: 'Intermediate (12th)',
    institution: 'Higher Secondary Education',
    year: 'Completed',
    cgpa: '6.0',
    icon: HiAcademicCap,
  },
  {
    degree: 'Secondary School Certificate (SSC / 10th)',
    institution: 'High School',
    year: 'Completed',
    cgpa: '8.2',
    icon: HiAcademicCap,
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="education"
      className="py-20 lg:py-32 relative overflow-hidden bg-gray-50 dark:bg-dark-primary"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
              My Journey
            </span>
            <h2 className="section-heading">Education</h2>
            <p className="section-subheading">
              A timeline of my academic achievements and learning milestones
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500" />

            {educationData.map((item, index) => (
              <motion.div
                key={item.degree}
                variants={itemVariants}
                className={`relative flex items-center mb-8 md:mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-0.5 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-full h-full rounded-full bg-white dark:bg-dark-card flex items-center justify-center">
                      <item.icon className="text-primary-600 dark:text-primary-400" size={28} />
                    </div>
                  </motion.div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div
                    className="glass-card p-6 card-hover"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.degree}
                      </h3>
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                          <FiCalendar size={14} />
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {item.institution}
                    </p>
                    {item.cgpa && (
                      <div className="flex items-center gap-2">
                        <FiAward className="text-accent-500" size={18} />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          CGPA: <span className="text-primary-600 dark:text-primary-400">{item.cgpa}</span>
                        </span>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
