import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaHeart } from 'react-icons/fa';

const socialLinks = [
  { name: 'LinkedIn', icon: FaLinkedin, url: '#' },
  { name: 'GitHub', icon: FaGithub, url: '#' },
  { name: 'Instagram', icon: FaInstagram, url: '#' },
  { name: 'Twitter', icon: FaTwitter, url: '#' },
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gray-900 dark:bg-dark-primary text-white overflow-hidden">
      {/* Top gradient border */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12 lg:py-16">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
                className="inline-block text-3xl font-heading font-bold gradient-text"
                whileHover={{ scale: 1.05 }}
              >
                SR
              </motion.a>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Building scalable applications from frontend to cloud deployment.
                Passionate about creating impactful software solutions.
              </p>
              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-gray-800/50 hover:bg-primary-500 text-gray-400 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                Contact
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="text-gray-400">
                  <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:shanmukharoopesh278@gmail.com"
                    className="hover:text-primary-400 transition-colors"
                  >
                    shanmukharoopesh278@gmail.com
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Phone
                  </span>
                  <a
                    href="tel:+919553282543"
                    className="hover:text-primary-400 transition-colors"
                  >
                    +91 9553282543
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Location
                  </span>
                  India
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Shanmukha Roopesh. All Rights Reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Designed & Developed with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-red-500" size={14} />
              </motion.span>{' '}
              by Shanmukha Roopesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
