import { Users, Award, ThumbsUp, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "+200",
    label: "Clients protégés",
  },
  {
    icon: Award,
    value: "10+",
    label: "Années d'expertise",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "De satisfaction",
  },
  {
    icon: Clock,
    value: "48h",
    label: "Délai d'intervention",
  },
];

const Stats = () => {
  return (
    <section className="py-16 lg:py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-foreground/20 transition-colors">
                <stat.icon className="w-7 h-7 text-secondary" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
