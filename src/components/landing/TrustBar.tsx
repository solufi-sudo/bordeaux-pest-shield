import { Award, Leaf, ThumbsUp, ShieldCheck } from "lucide-react";

const trustItems = [
  {
    icon: Award,
    label: "Certifié Professionnel",
  },
  {
    icon: Leaf,
    label: "Solutions Éco-responsables",
  },
  {
    icon: ThumbsUp,
    label: "Satisfaction Garantie",
  },
  {
    icon: ShieldCheck,
    label: "Produits Homologués",
  },
];

const TrustBar = () => {
  return (
    <section className="py-8 bg-muted border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-muted-foreground"
            >
              <item.icon className="w-6 h-6 text-secondary" />
              <span className="font-medium text-sm md:text-base">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
