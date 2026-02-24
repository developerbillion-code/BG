import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-muted/30">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary skew-x-12 translate-x-32 opacity-5 hidden lg:block rounded-bl-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl pt-10 lg:pt-0"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-secondary font-medium text-sm mb-6"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Accepting 5 new clients this month
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-foreground leading-[1.1] mb-6 text-balance">
              Transform Your <span className="text-primary relative whitespace-nowrap">
                Body & Mind
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span> <br className="hidden sm:block"/> in 12 Weeks
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 text-balance leading-relaxed">
              Personalized online coaching designed specifically for your lifestyle. Build strength, lose fat, and unlock your true potential with expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/998XXXXXXXXX?text=Hi,%20I%20want%20to%20start%20the%20program"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                Start Program
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/998XXXXXXXXX?text=Hi,%20I%20want%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-border text-foreground font-bold text-lg hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                Book Call
                <PlayCircle className="w-5 h-5 text-primary" />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-background object-cover"
                    src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80&auto=format&auto=compress&dpr=2&fm=webp&crop=faces&cs=tinysrgb&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80&sig=${i}`}
                    alt="Client avatar"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-primary">
                  {/* Stars */}
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="font-medium text-foreground mt-1">Over 200+ transformations</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative h-[600px] lg:h-[800px] w-full mt-12 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 scale-105" />
            {/* landing page hero fitness trainer coaching male client intense workout */}
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2000&auto=format&fit=crop"
              alt="Male fitness trainer coaching male client"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl z-10"
            />
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-8 -left-8 bg-background p-6 rounded-2xl shadow-xl z-20 hidden md:flex items-center gap-4 border border-border/50"
            >
              <div className="bg-primary/20 p-3 rounded-full">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-foreground">100%</p>
                <p className="text-sm text-muted-foreground font-medium">Results Guaranteed</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
