import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  price: number;
  rating: number;
  reviews: number;
  mood: string;
  description: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="relative">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Badge className="absolute top-2 left-2 bg-primary/90 backdrop-blur-sm">
          {book.mood}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-1 line-clamp-2">{book.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">by {book.author}</p>
        
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(book.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({book.reviews})</span>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {book.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">${book.price}</span>
          <Button size="sm" className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;