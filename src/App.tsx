import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ArtistDashboard from './components/ArtistDashboard';
import ArtistRegistration from './components/ArtistRegistration';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ArtistDashboard />
        <ArtistRegistration />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;