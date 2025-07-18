import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Heart, Gift, Star } from "lucide-react";

const SpecialSections = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Something Special for Every Reader
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover unique collections curated with love and powered by AI intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Books That Changed Lives */}
          <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="bg-gradient-to-br from-primary/10 to-primary-soft/20 pb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl">Books That Changed Lives</CardTitle>
                  <Badge variant="secondary" className="mt-1">Reader Stories</Badge>
                </div>
              </div>
              <p className="text-muted-foreground">
                Real stories from our community about books that transformed their perspectives and touched their souls.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">"Educated" by Tara Westover</p>
                    <p className="text-xs text-muted-foreground">Changed how I view education and family</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-bright rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">"Man's Search for Meaning"</p>
                    <p className="text-xs text-muted-foreground">Gave me purpose during difficult times</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">"The Alchemist"</p>
                    <p className="text-xs text-muted-foreground">Inspired me to follow my dreams</p>
                  </div>
                </div>
              </div>
              <Button className="w-full">Explore Life-Changing Books</Button>
            </CardContent>
          </Card>

          {/* Ellie's Weekly Wisdom */}
          <Card className="group overflow-hidden border-2 hover:border-accent-bright/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="bg-gradient-to-br from-accent/10 to-accent-bright/20 pb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-accent-bright rounded-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Ellie's Weekly Wisdom</CardTitle>
                  <Badge variant="secondary" className="mt-1">AI Curated</Badge>
                </div>
              </div>
              <p className="text-muted-foreground">
                Every week, our AI assistant Ellie picks a special book that perfectly captures the zeitgeist.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=100&h=120"
                    alt="This week's pick"
                    className="w-16 h-20 object-cover rounded-lg shadow-sm"
                  />
                  <div>
                    <p className="font-semibold">This Week's Pick</p>
                    <p className="text-sm text-muted-foreground">"Fourth Wing" by Rebecca Yarros</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground ml-1">4.8 (2.1k reviews)</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Perfect for readers seeking adventure with a touch of romance. The world-building will transport you completely." - Ellie
                </p>
              </div>
              <Button variant="outline" className="w-full">See Ellie's Full Review</Button>
            </CardContent>
          </Card>

          {/* Blind Date with a Book */}
          <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="bg-gradient-to-br from-secondary/50 to-muted/30 pb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Gift className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl">Blind Date with a Book</CardTitle>
                  <Badge variant="secondary" className="mt-1">Mystery Selection</Badge>
                </div>
              </div>
              <p className="text-muted-foreground">
                Trust your mood, trust our AI. Get a mystery book wrapped with only your selected mood as a clue.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 mb-6">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-6xl mb-2">📦</div>
                  <p className="text-sm font-medium">Mystery Book</p>
                  <p className="text-xs text-muted-foreground">Wrapped with love & AI precision</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-mood-happy rounded-full"></div>
                    <span>Mood-matched</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-mood-romantic rounded-full"></div>
                    <span>Surprise factor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-mood-adventurous rounded-full"></div>
                    <span>High-rated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-mood-nostalgic rounded-full"></div>
                    <span>Gift-wrapped</span>
                  </div>
                </div>
              </div>
              <Button className="w-full">Start My Blind Date</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpecialSections;