import { motion } from "framer-motion";
import { CheckCircle2, XCircle, TrendingUp, Target } from "lucide-react";

export function ProblemSolution() {
  const problems = [
    "Struggling to stay consistent with workouts",
    "Jumping between different diets with no results",
    "Feeling lost and intimidated in the gym",
    "No proper guidance or accountability system",
  ];

  const solutions = [
    "Custom 12-week progressive training plan",
    "Flexible nutrition strategy you actually enjoy",
    "Weekly check-ins and form reviews via video",
    "24/7 direct WhatsApp support access",
  ];

  return (
    <section id="program" className="py-24 bg-secondary text-secondary-foreground overflow-hidden relative">
      {/* Background graphic */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">The Program</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Stop Guessing. Start Progressing.
          </h3>
          <p className="text-xl text-secondary-foreground/70">
            Our premium coaching platform provides the exact step-by-step blueprint and support system you need to succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* The Problem Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background/5 border border-white/10 p-8 md:p-12 rounded-3xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-500/20 p-3 rounded-full">
                <XCircle className="w-8 h-8 text-red-500" />
              </div>
              <h4 className="text-2xl font-bold font-display">The Old Way</h4>
            </div>
            
            <ul className="space-y-6">
              {problems.map((problem, i) => (
                <li key={i} className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-500/70 shrink-0 mt-0.5" />
                  <span className="text-lg text-secondary-foreground/80">{problem}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Solution Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-primary to-primary/80 p-8 md:p-12 rounded-3xl text-primary-foreground shadow-2xl shadow-primary/20 relative overflow-hidden"
          >
            {/* Decorative icon background */}
            <Target className="absolute -bottom-10 -right-10 w-64 h-64 text-black/5 pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold font-display text-white">The Elevate Way</h4>
            </div>
            
            <ul className="space-y-6 relative z-10">
              {solutions.map((solution, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
                  <span className="text-lg font-medium text-white/90">{solution}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 relative z-10">
              <a
                href="https://wa.me/998XXXXXXXXX?text=Hi,%20I%20want%20to%20start%20the%20program"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-bold text-lg hover:bg-black transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Apply for Coaching
                <TrendingUp className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Visual Proof */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 rounded-3xl overflow-hidden relative h-[400px] group"
        >
          {/* progress fitness tracking male athlete */}
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
            alt="Client Progress"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-secondary/60 flex items-center justify-center p-8">
            <div className="text-center max-w-2xl">
              <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Real People. Real Results.
              </h4>
              <p className="text-lg text-white/80">
                Join hundreds of men who have completely transformed their physique and completely changed their trajectory in life.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
