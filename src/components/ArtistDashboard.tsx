import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, ArrowRight } from 'lucide-react';
import ArtistCard from './ArtistCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const MOCK_ARTISTS = [
  {
    id: '1',
    name: 'David Praise',
    genre: 'Contemporary',
    bio: 'Soulful melodies and uplifting messages that resonate with every heart.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2871aab4-0e93-4bc2-a994-858303de2efe/male-gospel-singer-1-8cf03b05-1775841755791.webp',
    followers: 12500,
    events: 45
  },
  {
    id: '2',
    name: 'Sarah Grace',
    genre: 'Worship',
    bio: 'Anointed worship leader known for spontaneous praise and deep lyrics.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2871aab4-0e93-4bc2-a994-858303de2efe/female-gospel-singer-1-b0636c1d-1775841753831.webp',
    followers: 8900,
    events: 32
  },
  {
    id: '3',
    name: 'Divine Echoes',
    genre: 'Choral',
    bio: 'Celebrating traditional gospel harmonies with a modern touch.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2871aab4-0e93-4bc2-a994-858303de2efe/gospel-choir-group-c80ac5d3-1775841753935.webp',
    followers: 15000,
    events: 60
  },
  {
    id: '4',
    name: 'Samuel Keyz',
    genre: 'Jazz Gospel',
    bio: 'Mastering the ivory keys to bring spiritual depth through music.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2871aab4-0e93-4bc2-a994-858303de2efe/gospel-musician-hands-af3a3464-1775841753508.webp',
    followers: 5400,
    events: 18
  },
  {
    id: '5',
    name: 'Unity Band',
    genre: 'Afrobeat',
    bio: 'High energy praise and rhythm focused on spreading the gospel.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2871aab4-0e93-4bc2-a994-858303de2efe/gospel-band-live-7b09a7f3-1775841753301.webp',
    followers: 22000,
    events: 110
  }
];

const ArtistDashboard = () => {
  const [search, setSearch] = useState('');

  const filteredArtists = MOCK_ARTISTS.filter(a => 
    a.name.toLowerCase().includes(search.toLowerCase()) || 
    a.genre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="dashboard" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Artist Monitoring Dashboard</h2>
            <p className="text-muted-foreground">
              Monitor the performance, engagement, and availability of our registered gospel artists worldwide.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search artists..."
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
          {filteredArtists.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium">No artists found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>

        <div className="mt-16 flex justify-center">
          <Button variant="link" className="group text-lg">
            View All Registered Artists 
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtistDashboard;