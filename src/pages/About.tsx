import Navigation from "@/components/Navigation";
import { Heart, Award, Users } from "lucide-react";
import btechLogo from "@/assets/btech-logo.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Logo + Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <img
            src={btechLogo}
            alt="Btech Ruchulu Logo"
            className="mx-auto mb-6 sm:mb-8 w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full shadow-lg border-4 border-primary"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Btech Ruchulu
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2 sm:px-0">
            Bringing authentic Indian flavors to your table since our inception.
          </p>
        </div>

        {/* Story Section */}
        <section className="max-w-3xl mx-auto mb-12 sm:mb-16 px-2 sm:px-0">
          <div className="prose prose-base sm:prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="mb-4">
              At <strong>Btech Ruchulu</strong>, we believe in preserving the rich culinary
              heritage of India. Our journey began with a simple mission — to share the authentic
              taste of traditional Indian pickles, karam podis, and homemade snacks with food lovers
              everywhere.
            </p>
            <p className="mb-4">
              Every product we create is a labor of love, made using time-honored recipes passed
              down through generations. We source the finest ingredients and prepare each item with
              the same care and attention that our grandmothers used in their kitchens.
            </p>
            <p>
              From our signature mango pickles to our aromatic Guntur karam podi, each product tells
              a story of tradition, flavor, and authenticity. We're proud to bring these treasured
              tastes to your home.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-2 sm:px-0">
          {/* Card 1 */}
          <div className="text-center p-6 sm:p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Made with Love
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Every product is crafted with care and passion, just like homemade food should be.
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-center p-6 sm:p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Authentic Recipes
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Traditional methods and genuine ingredients ensure the most authentic flavors.
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-center p-6 sm:p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Customer First
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Your satisfaction is our priority, and we're committed to quality in every jar.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12 sm:mt-16 py-6 sm:py-8">
        <div className="container mx-auto px-4 text-center text-sm sm:text-base text-muted-foreground">
          <p>&copy; 2025 Btech Ruchulu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
