import { Award, Leaf, BadgeCheck } from "lucide-react";

const certifications = [
  { icon: Award, label: "Certibiocide" },
  { icon: Leaf, label: "Éco-Responsable" },
  { icon: BadgeCheck, label: "Qualité Pro" },
];

const Certifications = () => {
  return (
    <section className="py-12 bg-muted border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
            Nos certifications et labels
          </span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                <cert.icon className="w-8 h-8" />
              </div>
              <span className="font-medium text-sm">{cert.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
