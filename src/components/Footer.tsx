import { Music, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl text-primary mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Music className="w-6 h-6 text-primary" />
              </div>
              <span>Gospel Registry</span>
            </div>
            <p className="text-muted-foreground mb-6">
              The leading platform for gospel artists to register, monitor their impact, and grow their ministry globally.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#dashboard" className="text-muted-foreground hover:text-primary transition-colors">Dashboard</a></li>
              <li><a href="#register" className="text-muted-foreground hover:text-primary transition-colors">Artist Registration</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Event Calendar</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Subscribe</h4>
            <p className="text-muted-foreground mb-4 text-sm">
              Get the latest updates on gospel music trends and new artist releases.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-muted border-none rounded-lg py-2 pl-9 pr-4 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Gospel Artist Registry. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary">Help Center</a>
            <a href="#" className="hover:text-primary">Status</a>
            <a href="#" className="hover:text-primary">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;