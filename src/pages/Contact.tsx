import { useState } from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: "Message sent!", description: "Thank you for reaching out. We'll get back to you soon." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const update = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <>
      <SEOHead title="Contact Us" description="Get in touch with the NewsFlux team. Send us your tips, feedback, or questions." url="/contact" />
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground mb-8">Have a story tip, feedback, or question? We'd love to hear from you.</p>
        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5" noValidate>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} className="mt-1.5" />
            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-1.5" />
            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" value={form.subject} onChange={(e) => update("subject", e.target.value)} className="mt-1.5" />
            {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject}</p>}
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} className="mt-1.5" />
            {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
          </div>
          <Button type="submit" className="gap-2">
            <Send className="w-4 h-4" /> Send Message
          </Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
