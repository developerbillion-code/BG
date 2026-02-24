import { motion } from "framer-motion";
import { Award, Clock, Users, ShieldCheck } from "lucide-react";

export function About() {
  const credentials = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "5+ Years",
      description: "Professional coaching experience"
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Certified",
      description: "ISSA Personal Trainer & Nutritionist"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "300+ Clients",
      description: "Successfully transformed"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Science-Based",
      description: "Evidence-backed methodologies"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {/* about section trainer portrait confident */}
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000&auto=format&fit=crop"
                alt="Head Coach"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-primary font-bold tracking-wider uppercase text-sm mb-1">Head Coach</p>
                <h3 className="text-3xl font-display font-bold text-white">Alex Mercer</h3>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(circle,hsl(var(--primary))_2px,transparent_2px)] bg-[size:10px_10px] opacity-40 z-[-1]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">About Your Coach</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              I don't just build bodies, <br/>
              I build <span className="text-primary">confidence.</span>
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground mb-10">
              <p>
                For over half a decade, I've dedicated my life to understanding the human body and the psychology of change. I know exactly what it takes to break through plateaus and achieve results that actually last.
              </p>
              <p>
                My approach isn't about starvation diets or endless hours of cardio. It's about sustainable, science-backed strategies tailored to your unique lifestyle, mechanics, and goals.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {credentials.map((cred, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-muted/50 p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="bg-background w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-4">
                    {cred.icon}
                  </div>
                  <h4 className="font-bold text-foreground text-lg mb-1">{cred.title}</h4>
                  <p className="text-muted-foreground text-sm">{cred.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
