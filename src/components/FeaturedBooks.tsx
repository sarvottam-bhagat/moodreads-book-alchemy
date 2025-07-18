import BookCard from "./BookCard";
import { Button } from "@/components/ui/button";

// Mock data for featured books
const featuredBooks = [
  {
    id: "1",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=300&h=400",
    price: 16.99,
    rating: 4.8,
    reviews: 2847,
    mood: "Romantic",
    description: "A captivating story of love, ambition, and the price of fame in Hollywood's golden age."
  },
  {
    id: "2", 
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=400",
    price: 15.99,
    rating: 4.6,
    reviews: 1924,
    mood: "Nostalgic",
    description: "A haunting tale of nature, isolation, and the mysteries that connect us all."
  },
  {
    id: "3",
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=300&h=400",
    price: 14.99,
    rating: 4.7,
    reviews: 3156,
    mood: "Anxious",
    description: "A philosophical journey through infinite possibilities and the paths not taken."
  },
  {
    id: "4",
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=300&h=400",
    price: 17.99,
    rating: 4.9,
    reviews: 2374,
    mood: "Adventurous",
    description: "A thrilling space adventure that combines science, humor, and heart."
  }
];

const trendingBooks = [
  {
    id: "5",
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&h=400",
    price: 18.99,
    rating: 4.5,
    reviews: 1687,
    mood: "Happy",
    description: "A love letter to gaming, friendship, and the creative process."
  },
  {
    id: "6",
    title: "The Atlas Six",
    author: "Olivie Blake",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=300&h=400",
    price: 16.99,
    rating: 4.4,
    reviews: 2198,
    mood: "Adventurous",
    description: "Dark academia meets magical realism in this compelling fantasy."
  },
  {
    id: "7",
    title: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    cover: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=300&h=400",
    price: 15.99,
    rating: 4.6,
    reviews: 2945,
    mood: "Happy",
    description: "A witty and inspiring story of a woman scientist in the 1960s."
  },
  {
    id: "8",
    title: "The Song of Achilles",
    author: "Madeline Miller",
    cover: "https://images.unsplash.com/photo-1471023492977-1be913e3fe2d?auto=format&fit=crop&w=300&h=400",
    price: 14.99,
    rating: 4.8,
    reviews: 4567,
    mood: "Sad",
    description: "A beautiful retelling of the Iliad focusing on love and tragedy."
  }
];

const FeaturedBooks = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Featured Books */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Featured Books</h2>
              <p className="text-muted-foreground">Handpicked stories that touched our hearts</p>
            </div>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>

        {/* Trending This Week */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Trending This Week</h2>
              <p className="text-muted-foreground">Books that are creating waves in our community</p>
            </div>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;