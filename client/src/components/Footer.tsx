import { Dumbbell, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          
          <div className="col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Dumbbell className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                BG ELEVATE<span className="text-primary">FIT</span>
              </span>
            </a>
            <p className="text-white/60 text-balance mb-6">
              Premium online fitness coaching helping men build muscle, lose fat, and unlock their ultimate potential.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/60 hover:text-primary transition-colors">About Me</a></li>
              <li><a href="#program" className="text-white/60 hover:text-primary transition-colors">The Program</a></li>
              <li><a href="#results" className="text-white/60 hover:text-primary transition-colors">Client Results</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} BG ElevateFit Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
