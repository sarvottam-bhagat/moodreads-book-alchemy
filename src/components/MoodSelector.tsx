import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const moods = [
  { id: "happy", emoji: "😊", label: "Happy", color: "mood-happy", description: "Uplifting stories that spark joy" },
  { id: "sad", emoji: "😢", label: "Sad", color: "mood-sad", description: "Healing reads for difficult times" },
  { id: "romantic", emoji: "💕", label: "Romantic", color: "mood-romantic", description: "Love stories that warm the heart" },
  { id: "adventurous", emoji: "🗺️", label: "Adventurous", color: "mood-adventurous", description: "Epic journeys and thrilling tales" },
  { id: "anxious", emoji: "😰", label: "Anxious", color: "mood-anxious", description: "Calming reads for peace of mind" },
  { id: "nostalgic", emoji: "🌅", label: "Nostalgic", color: "mood-nostalgic", description: "Stories that take you back in time" },
];

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");

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
              onClick={() => setSelectedMood(mood.id)}
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
            <Button size="lg" className="px-8 py-3 text-lg font-medium">
              Find My Perfect Books
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MoodSelector;