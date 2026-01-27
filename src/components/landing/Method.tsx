import { Search, MapPin, Zap, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnostic",
    description: "Analyse complète de votre extérieur pour identifier les zones à risque et l'ampleur de l'infestation.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Identification",
    description: "Repérage précis des zones de prolifération et des points d'eau stagnante propices aux moustiques.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Traitement",
    description: "Intervention ciblée avec des produits professionnels adaptés à votre environnement.",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Suivi",
    description: "Entretien régulier et garantie de résultats durables tout au long de la saison.",
  },
];

const Method = () => {
  return (
    <section id="method" className="py-20 lg:py-28 section-alt">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Notre Méthode
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Un Processus Simple
            <span className="text-primary"> et Efficace</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            En 4 étapes seulement, retrouvez des extérieurs agréables et protégés. 
            Notre approche méthodique garantit des résultats durables.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
              )}

              <div className="relative z-10 bg-card rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-secondary" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
