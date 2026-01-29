import { Shield, CheckCircle, Lock, EyeOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    icon: Shield,
    title: "Sérénité",
    description: "Profitez de vos extérieurs sans stress ni nuisance",
  },
  {
    icon: CheckCircle,
    title: "Efficacité",
    description: "Résultats durables grâce à notre expertise terrain",
  },
  {
    icon: Lock,
    title: "Sécurité",
    description: "Produits adaptés pour votre famille et vos animaux",
  },
  {
    icon: EyeOff,
    title: "Discrétion",
    description: "Intervention professionnelle rapide et discrète",
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Qui Sommes-Nous
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Votre Expert Anti-Moustiques
            <span className="text-primary"> à Bordeaux</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Spécialistes du traitement anti-moustiques depuis plus de 4 ans, nous intervenons 
            chez les particuliers, professionnels et les collectivités de Bordeaux et de toute la Gironde. 
            Notre expertise locale nous permet de comprendre les spécificités de notre région : 
            <strong className="text-foreground"> zones humides, moustique tigre, et climat propice à la prolifération</strong>.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="border-none shadow-soft bg-card hover:shadow-lg transition-shadow duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
