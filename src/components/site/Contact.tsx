import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PHONE, PHONE_RAW } from "./Header";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    toast.success("Thanks! The Dreamline team will get back to you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const info = [
    { icon: Phone, title: "Phone", lines: [PHONE, "Available 24/7"] },
    { icon: Mail, title: "Email", lines: ["info@dreamline.com", "support@dreamline.com"] },
    { icon: MapPin, title: "Main Office", lines: ["Nairobi CBD, Kenya", "Opposite Bus Station"] },
    { icon: Clock, title: "Working Hours", lines: ["Monday - Sunday", "24/7 Customer Support"] },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Get in Touch</h2>
          <p className="mt-3 text-muted-foreground">
            Have questions? We're here to help you plan your journey
          </p>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="grid gap-5 sm:grid-cols-2">
            {info.map((item) => (
              <Card key={item.title} className="shadow-card">
                <CardContent>
                  <span className="mb-3 flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                    <item.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <div className="mt-1.5 space-y-1 text-sm text-muted-foreground">
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-elegant">
            <CardContent>
              <h3 className="text-xl font-semibold text-foreground">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-primary">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <a
              href={`https://wa.me/${PHONE_RAW}?text=${encodeURIComponent("Hello! I'd like to inquire about your bus services.")}`}
              target="_blank"
              rel="noreferrer"
            >
              Contact us on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
