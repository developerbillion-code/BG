import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProblemSolution } from "@/components/ProblemSolution";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      <Navigation />
      <Hero />
      <About />
      <ProblemSolution />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
