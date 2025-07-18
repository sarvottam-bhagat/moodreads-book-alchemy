import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Star } from "lucide-react";

const moods = [
  { id: "happy", emoji: "😊", label: "Happy", color: "mood-happy", description: "Uplifting stories that spark joy" },
  { id: "sad", emoji: "😢", label: "Sad", color: "mood-sad", description: "Healing reads for difficult times" },
  { id: "romantic", emoji: "💕", label: "Romantic", color: "mood-romantic", description: "Love stories that warm the heart" },
  { id: "adventurous", emoji: "🗺️", label: "Adventurous", color: "mood-adventurous", description: "Epic journeys and thrilling tales" },
  { id: "anxious", emoji: "😰", label: "Anxious", color: "mood-anxious", description: "Calming reads for peace of mind" },
  { id: "nostalgic", emoji: "🌅", label: "Nostalgic", color: "mood-nostalgic", description: "Stories that take you back in time" },
];

const moodBooks = {
  happy: [
    { title: "Beach Read", author: "Emily Henry", price: "$13.99", rating: 4.3, description: "Fun and flirty romance that will make you smile", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=300&h=400" },
    { title: "The House in the Cerulean Sea", author: "TJ Klune", price: "$14.99", rating: 4.7, description: "Heartwarming fantasy about found family", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=400" },
    { title: "Lessons in Chemistry", author: "Bonnie Garmus", price: "$15.99", rating: 4.6, description: "Witty story of a woman scientist in the 1960s", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=300&h=400" },
  ],
  sad: [
    { title: "The Song of Achilles", author: "Madeline Miller", price: "$14.99", rating: 4.8, description: "Beautiful retelling focusing on love and tragedy", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=300&h=400" },
    { title: "Me Before You", author: "Jojo Moyes", price: "$12.99", rating: 4.4, description: "Moving story about love, loss, and living life fully", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&h=400" },
    { title: "The Midnight Library", author: "Matt Haig", price: "$14.99", rating: 4.7, description: "Philosophical journey through infinite possibilities", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&h=400" },
  ],
  romantic: [
    { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", price: "$16.99", rating: 4.9, description: "Captivating Hollywood romance story", image: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?auto=format&fit=crop&w=300&h=400" },
    { title: "Pride and Prejudice", author: "Jane Austen", price: "$11.99", rating: 4.8, description: "The timeless romance classic", image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=300&h=400" },
    { title: "Beach Read", author: "Emily Henry", price: "$13.99", rating: 4.3, description: "Enemies to lovers with emotional depth", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=300&h=400" },
  ],
  adventurous: [
    { title: "Project Hail Mary", author: "Andy Weir", price: "$17.99", rating: 4.8, description: "Thrilling space adventure with science and humor", image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=300&h=400" },
    { title: "The Atlas Six", author: "Olivie Blake", price: "$16.99", rating: 4.5, description: "Dark academia meets magical realism", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=400" },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", price: "$19.99", rating: 4.9, description: "The epic fantasy adventure", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=300&h=400" },
  ],
  anxious: [
    { title: "The Midnight Library", author: "Matt Haig", price: "$14.99", rating: 4.7, description: "Comforting journey through life's possibilities", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&h=400" },
    { title: "Anxious People", author: "Fredrik Backman", price: "$15.99", rating: 4.6, description: "Quirky, heartwarming story about connection", image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=300&h=400" },
    { title: "The House in the Cerulean Sea", author: "TJ Klune", price: "$14.99", rating: 4.7, description: "Gentle fantasy that soothes the soul", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=400" },
  ],
  nostalgic: [
    { title: "Where the Crawdads Sing", author: "Delia Owens", price: "$16.99", rating: 4.5, description: "Haunting tale of nature and mysteries", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=300&h=400" },
    { title: "The Seven Moons of Maali Almeida", author: "Shehan Karunatilaka", price: "$18.99", rating: 4.4, description: "Magical journey through memory", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=300&h=400" },
    { title: "Tomorrow, and Tomorrow, and Tomorrow", author: "Gabrielle Zevin", price: "$17.99", rating: 4.6, description: "Nostalgic love letter to gaming and friendship", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=300&h=400" },
  ],
};

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [showBooks, setShowBooks] = useState<boolean>(false);

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    setShowBooks(false); // Hide books when selecting a different mood
  };

  const handleFindBooks = () => {
    setShowBooks(true);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How are you feeling today?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let your emotions guide you to the perfect book. Our AI understands your mood and finds stories that resonate with your heart.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {moods.map((mood) => (
            <Card
              key={mood.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                selectedMood === mood.id
                  ? `bg-${mood.color} border-primary shadow-md`
                  : "bg-card hover:bg-muted/50"
              }`}
              onClick={() => handleMoodSelect(mood.id)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{mood.emoji}</div>
                <h3 className="font-semibold text-foreground mb-2">{mood.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {mood.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedMood && (
          <div className="text-center">
            <div className="mb-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Mood: {moods.find(m => m.id === selectedMood)?.label} {moods.find(m => m.id === selectedMood)?.emoji}
              </Badge>
            </div>
            <Button 
              size="lg" 
              className="px-8 py-3 text-lg font-medium"
              onClick={handleFindBooks}
            >
              Find My Perfect Books
            </Button>
          </div>
        )}

        {showBooks && selectedMood && (
          <div className="mt-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                Perfect Books for Your {moods.find(m => m.id === selectedMood)?.label} Mood
              </h3>
              <p className="text-muted-foreground">
                {moods.find(m => m.id === selectedMood)?.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moodBooks[selectedMood as keyof typeof moodBooks]?.map((book, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">{book.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-bold text-lg text-foreground mb-1 line-clamp-2">{book.title}</h4>
                    <p className="text-muted-foreground font-medium mb-2">by {book.author}</p>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {book.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="font-bold text-primary">
                        {book.price}
                      </Badge>
                    </div>
                    
                    <Button className="w-full" size="sm">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                onClick={() => setShowBooks(false)}
                className="px-6"
              >
                Choose Different Mood
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MoodSelector;