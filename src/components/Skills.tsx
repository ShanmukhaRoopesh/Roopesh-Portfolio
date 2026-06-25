import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaJava,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiExpress,
} from 'react-icons/si';
import { FiDatabase } from 'react-icons/fi';

interface Skill {
  name: string;
  icon: typeof FaJava;
  color: string;
  proficiency: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', icon: FaJava, color: '#ED8B00', proficiency: 90 },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', proficiency: 85 },
      { name: 'SQL', icon: FiDatabase, color: '#4479A1', proficiency: 88 },
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26', proficiency: 95 },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', proficiency: 90 },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', proficiency: 85 },
      { name: 'React.js', icon: FaReact, color: '#61DAFB', proficiency: 85 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Java', icon: FaJava, color: '#ED8B00', proficiency: 90 },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F', proficiency: 88 },
      { name: 'Hibernate', icon: SiHibernate, color: '#59666C', proficiency: 82 },
      { name: 'JDBC', icon: FiDatabase, color: '#00758F', proficiency: 85 },
      { name: 'Node.js', icon: FaNodeJs, color: '#339933', proficiency: 78 },
      { name: 'Express.js', icon: SiExpress, color: '#000000', proficiency: 75 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', proficiency: 88 },
      { name: 'SQL', icon: FiDatabase, color: '#00758F', proficiency: 90 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: FaDocker, color: '#2496ED', proficiency: 85 },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', proficiency: 75 },
      { name: 'Terraform', icon: SiTerraform, color: '#7B42BC', proficiency: 72 },
      { name: 'Jenkins', icon: SiJenkins, color: '#D24939', proficiency: 78 },
      { name: 'CI/CD', icon: FaGitAlt, color: '#F05032', proficiency: 80 },
      { name: 'AWS', icon: FaAws, color: '#FF9900', proficiency: 75 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 lg:py-32 relative overflow-hidden bg-white dark:bg-dark-secondary"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
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
              My Expertise
            </span>
            <h2 className="section-heading">Skills & Technologies</h2>
            <p className="section-subheading">
              Technologies and tools I use to bring products to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 text-sm font-bold">
                    {categoryIndex + 1}
                  </span>
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="glass-card p-4 card-hover group cursor-pointer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex flex-col items-center gap-3">
                        {/* Icon */}
                        <div
                          className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${skill.color}15` }}
                        >
                          <skill.icon
                            size={32}
                            style={{ color: skill.color }}
                            className="transition-transform duration-300"
                          />
                        </div>

                        {/* Name */}
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                          {skill.name}
                        </span>

                        {/* Proficiency Bar */}
                        <div className="w-full h-1.5 bg-gray-200 dark:bg-dark-border rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.proficiency}%` } : {}}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          />
                        </div>

                        {/* Percentage */}
                        <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                          {skill.proficiency}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
