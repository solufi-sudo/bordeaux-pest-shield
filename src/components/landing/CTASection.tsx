import { Phone, MessageCircle, ShieldCheck, Clock, CalendarCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-primary-foreground" />
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-2 border-primary-foreground" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full border-2 border-primary-foreground" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-cta/20 text-cta-foreground px-4 py-2 rounded-full mb-6">
            <CalendarCheck className="w-5 h-5" />
            <span className="font-semibold">Saison des moustiques : Réservez maintenant</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Protégez Votre Extérieur
            <span className="block text-secondary">Avant l'Été</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Places limitées chaque semaine. Intervention sous 48h garantie. 
            <strong> Diagnostic gratuit et sans engagement.</strong>
          </p>

          {/* Urgency Points */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Clock className="w-5 h-5 text-secondary" />
              <span>Intervention sous 48h</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <span>Satisfaction garantie</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span>Ré-intervention gratuite</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="gradient-cta text-cta-foreground shadow-cta hover:opacity-90 transition-all text-lg px-10 py-7 h-auto animate-pulse-soft"
              asChild
            >
              <a href="tel:+33500000000" className="gap-3">
                <Phone className="w-6 h-6" />
                Appeler Maintenant
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 text-lg px-10 py-7 h-auto"
              asChild
            >
              <a href="https://wa.me/33600000000" target="_blank" rel="noopener noreferrer" className="gap-3">
                <MessageCircle className="w-6 h-6" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Reassurance */}
          <p className="text-primary-foreground/70 text-sm">
            📞 Rappel sous 24h garanti • Devis gratuit • Sans engagement
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
