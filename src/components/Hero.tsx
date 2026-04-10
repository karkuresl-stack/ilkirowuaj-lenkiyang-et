import { motion } from 'framer-motion';
import { Mic2, Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-sm font-medium text-primary mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Join the Global Gospel Community</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Register, Monitor & <span className="text-primary">Elevate</span> Your Gospel Ministry
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            The comprehensive platform for gospel artists to register their talent, monitor engagement, and connect with event organizers globally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
            >
              <Mic2 className="w-5 h-5" />
              Join the Registry
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#dashboard"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-bold text-lg border border-border"
            >
              View Dashboard
            </motion.a>
          </motion.div>
        </div>

        {/* Featured Image Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="space-y-4">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/2871aab4-0e93-4bc2-a994-858303de2efe/male-gospel-singer-1-8cf03b05-1775841755791.webp" 
              className="rounded-2xl h-48 w-full object-cover" 
              alt="Artist"
            />
            <div className="bg-primary/10 h-32 rounded-2xl" />
          </div>
          <div className="space-y-4 pt-8">
            <div className="bg-secondary h-32 rounded-2xl" />
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/2871aab4-0e93-4bc2-a994-858303de2efe/female-gospel-singer-1-b0636c1d-1775841753831.webp" 
              className="rounded-2xl h-64 w-full object-cover" 
              alt="Artist"
            />
          </div>
          <div className="space-y-4">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/2871aab4-0e93-4bc2-a994-858303de2efe/gospel-choir-group-c80ac5d3-1775841753935.webp" 
              className="rounded-2xl h-64 w-full object-cover" 
              alt="Choir"
            />
            <div className="bg-accent/10 h-32 rounded-2xl" />
          </div>
          <div className="space-y-4 pt-12">
            <div className="bg-primary/5 h-40 rounded-2xl" />
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/2871aab4-0e93-4bc2-a994-858303de2efe/gospel-band-live-7b09a7f3-1775841753301.webp" 
              className="rounded-2xl h-48 w-full object-cover" 
              alt="Band"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;