import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "@shared/routes";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Loader2, Send } from "lucide-react";

const formSchema = api.inquiries.create.input;
type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const { mutate, isPending } = useCreateInquiry();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Get in Touch</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Still have questions?
          </h3>
          <p className="mt-4 text-muted-foreground text-lg">
            Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-card p-8 rounded-3xl shadow-xl shadow-black/5 border border-border">
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
              <input
                {...register("name")}
                id="name"
                className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Your Message</label>
            <textarea
              {...register("message")}
              id="message"
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none"
              placeholder="Tell me about your fitness goals..."
            />
            {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isPending ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
