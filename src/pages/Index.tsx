import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MoodSelector from "@/components/MoodSelector";
import FeaturedBooks from "@/components/FeaturedBooks";
import SpecialSections from "@/components/SpecialSections";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MoodSelector />
      <FeaturedBooks />
      <SpecialSections />
      <ChatBot />
    </div>
  );
};

export default Index;
