import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-bookstore.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                ✨ AI-Powered Book Discovery
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Books for every{" "}
                <span className="text-primary">feeling</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Discover your next favorite read through the power of emotions. 
                Let your mood guide you to stories that truly resonate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 py-3 text-lg font-medium">
                Find My Mood
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                Browse Collection
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>10,000+ curated books</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-bright rounded-full"></div>
                <span>AI-powered recommendations</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Cozy bookstore interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">4.9⭐</div>
                <div className="text-sm opacity-90">Customer Rating</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border shadow-lg p-4 rounded-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Readers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;