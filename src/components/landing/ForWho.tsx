import { Home, Building2, Trees, Umbrella, Waves, Baby, Utensils, Hotel, Tent, Users, ShieldCheck, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const particuliers = [
  { icon: Trees, label: "Jardins paisibles" },
  { icon: Umbrella, label: "Terrasses conviviales" },
  { icon: Waves, label: "Piscines sereines" },
  { icon: Baby, label: "Protection des enfants" },
  { icon: Home, label: "Soirées d'été retrouvées" },
];

const professionnels = [
  { icon: Utensils, label: "Restaurants & terrasses" },
  { icon: Hotel, label: "Hôtels & résidences" },
  { icon: Tent, label: "Campings & gîtes" },
  { icon: Users, label: "Collectivités" },
  { icon: TrendingUp, label: "Protection de votre image" },
];

const ForWho = () => {
  return (
    <section id="for-who" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Pour Qui ?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Des Solutions Adaptées
            <span className="text-primary"> à Vos Besoins</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Que vous soyez un particulier souhaitant profiter de votre jardin 
            ou un professionnel soucieux de l'expérience de vos clients, 
            nous avons la solution adaptée.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Particuliers */}
          <Card className="border-2 border-primary/20 shadow-soft hover:border-primary/40 transition-colors">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Home className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Particuliers
                </h3>
              </div>

              <p className="text-muted-foreground mb-8">
                Retrouvez le plaisir de profiter de votre extérieur en famille, 
                sans crainte des piqûres et des nuisances.
              </p>

              <ul className="space-y-4">
                {particuliers.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-foreground">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Professionnels */}
          <Card className="border-2 border-secondary/20 shadow-soft hover:border-secondary/40 transition-colors">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Professionnels
                </h3>
              </div>

              <p className="text-muted-foreground mb-8">
                Protégez votre image de marque et le confort de vos clients 
                avec une intervention professionnelle et discrète.
              </p>

              <ul className="space-y-4">
                {professionnels.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
