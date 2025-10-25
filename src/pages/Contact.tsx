import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // ✅ WhatsApp Number
  const whatsappNumber = "918639619426"; // ⬅️ update anytime

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalMessage = `Hello! I want to contact Btech Ruchulu.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;
    window.open(url, "_blank");

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Have questions? Reach out anytime. We respond quickly!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* ✅ WhatsApp Form */}
          <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX-XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what you're looking for..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact on WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                You can also reach us directly through phone or visit us!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 gradient-hero rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">contact@btechruchulu.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 gradient-hero rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91 86396 19426</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 gradient-hero rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-muted-foreground text-sm">
                Monday - Saturday: 9:00 AM - 7:00 PM
              </p>
              <p className="text-muted-foreground text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-card border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Btech Ruchulu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
