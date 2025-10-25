import Navigation from "@/components/Navigation";
import { Heart, Award, Users } from "lucide-react";
import btechLogo from "@/assets/btech-logo.jpg"; // ✅ Import your logo

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        {/* Logo + Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <img
            src={btechLogo}
            alt="Btech Ruchulu Logo"
            className="mx-auto mb-8 w-48 h-48 object-cover rounded-full shadow-lg border-4 border-primary"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Btech Ruchulu
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Bringing authentic Indian flavors to your table since our inception
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Btech Ruchulu, we believe in preserving the rich culinary heritage of India. Our
              journey began with a simple mission — to share the authentic taste of traditional
              Indian pickles, karam podis, and homemade snacks with food lovers everywhere.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every product we create is a labor of love, made using time-honored recipes passed
              down through generations. We source the finest ingredients and prepare each item with
              the same care and attention that our grandmothers used in their kitchens.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From our signature mango pickles to our aromatic Guntur karam podi, each product
              tells a story of tradition, flavor, and authenticity. We're proud to bring these
              treasured tastes to your home.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-warm transition-all duration-300">
            <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Made with Love</h3>
            <p className="text-muted-foreground">
              Every product is crafted with care and passion, just like homemade food should be.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-warm transition-all duration-300">
            <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Authentic Recipes</h3>
            <p className="text-muted-foreground">
              Traditional methods and genuine ingredients ensure the most authentic flavors.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-warm transition-all duration-300">
            <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Customer First</h3>
            <p className="text-muted-foreground">
              Your satisfaction is our priority, and we're committed to quality in every jar.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Btech Ruchulu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
