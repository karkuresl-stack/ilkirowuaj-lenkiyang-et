import { motion } from 'framer-motion';
import { Users, Calendar, MapPin, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface ArtistCardProps {
  artist: {
    id: string;
    name: string;
    genre: string;
    bio: string;
    image: string;
    followers: number;
    events: number;
    location?: string;
  };
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden border-border bg-card/50 backdrop-blur-sm group">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-md">
              {artist.genre}
            </Badge>
          </div>
          <button className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-md hover:bg-red-500/20 hover:text-red-500 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <CardContent className="p-5">
          <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {artist.bio}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex flex-col items-center gap-1">
              <span className="flex items-center gap-1 text-xs text-muted-foreground uppercase font-semibold">
                <Users className="w-3 h-3" /> Followers
              </span>
              <span className="text-sm font-bold">{artist.followers.toLocaleString()}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="flex items-center gap-1 text-xs text-muted-foreground uppercase font-semibold">
                <Calendar className="w-3 h-3" /> Events
              </span>
              <span className="text-sm font-bold">{artist.events}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="flex items-center gap-1 text-xs text-muted-foreground uppercase font-semibold">
                <MapPin className="w-3 h-3" /> Location
              </span>
              <span className="text-sm font-bold">Nigeria</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ArtistCard;