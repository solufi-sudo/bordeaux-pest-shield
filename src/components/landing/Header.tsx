import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground">Moustiques</span>
              <span className="font-bold text-lg text-secondary">Bordeaux</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Qui sommes-nous
            </a>
            <a href="#method" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Notre méthode
            </a>
            <a href="#for-who" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Pour qui ?
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Témoignages
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              asChild
            >
              <a href="https://wa.me/33600000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="sm"
              className="gap-2 gradient-cta text-cta-foreground shadow-cta hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="tel:+33500000000">
                <Phone className="w-4 h-4" />
                Appeler
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Qui sommes-nous
              </a>
              <a
                href="#method"
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Notre méthode
              </a>
              <a
                href="#for-who"
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pour qui ?
              </a>
              <a
                href="#testimonials"
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Témoignages
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  className="gap-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground w-full"
                  asChild
                >
                  <a href="https://wa.me/33600000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  className="gap-2 gradient-cta text-cta-foreground shadow-cta hover:opacity-90 transition-opacity w-full"
                  asChild
                >
                  <a href="tel:+33500000000">
                    <Phone className="w-4 h-4" />
                    Appeler maintenant
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
