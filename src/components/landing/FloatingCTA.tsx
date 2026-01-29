import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        size="lg"
        className="gradient-cta text-cta-foreground shadow-cta hover:opacity-90 transition-all rounded-full w-16 h-16 p-0 animate-pulse-soft"
        asChild
      >
        <a href="tel:+33683643822" aria-label="Appeler maintenant">
          <Phone className="w-7 h-7" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingCTA;
