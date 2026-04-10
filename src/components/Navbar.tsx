import { motion, AnimatePresence } from 'framer-motion';
import { Music, Menu, X, Mic2, BarChart3, Users } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Dashboard', href: '#dashboard', icon: BarChart3 },
    { name: 'Register', href: '#register', icon: Mic2 },
    { name: 'Artists', href: '#artists', icon: Users },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 font-bold text-xl text-primary"
        >
          <div className="bg-primary/10 p-2 rounded-lg">
            <Music className="w-6 h-6 text-primary" />
          </div>
          <span>Gospel Registry</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 py-2 text-muted-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </a>
              ))}
              <button className="bg-primary text-primary-foreground w-full py-3 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;