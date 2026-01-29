import { Phone, MessageCircle, MapPin, Clock, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-terrace.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Famille profitant de leur terrasse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Badge className="bg-secondary text-secondary-foreground px-3 py-1 text-sm font-medium">
              <MapPin className="w-3 h-3 mr-1" />
              Expert Local Bordeaux
            </Badge>
            <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground px-3 py-1 text-sm">
              <Users className="w-3 h-3 mr-1" />
              +200 clients satisfaits
            </Badge>
            <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground px-3 py-1 text-sm">
              <Clock className="w-3 h-3 mr-1" />
              Intervention 48h
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Profitez Enfin de Vos
            <span className="block text-secondary"> Extérieurs Sans Moustiques</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Solution professionnelle et durable pour <strong>Bordeaux</strong> et toute la <strong>Gironde</strong>. 
            Retrouvez le plaisir de vos soirées d'été.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="gradient-cta text-cta-foreground shadow-cta hover:opacity-90 transition-all text-lg px-8 py-6 h-auto animate-pulse-soft"
              asChild
            >
              <a href="tel:+33683643822" className="gap-3">
                <Phone className="w-5 h-5" />
                Demander Mon Diagnostic Gratuit
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 text-lg px-8 py-6 h-auto backdrop-blur-sm"
              asChild
            >
              <a href="https://wa.me/33600000000" target="_blank" rel="noopener noreferrer" className="gap-3">
                <MessageCircle className="w-5 h-5" />
                Nous contacter sur WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span className="text-sm">Devis gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span className="text-sm">Produits sécurisés</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span className="text-sm">Satisfaction garantie</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
