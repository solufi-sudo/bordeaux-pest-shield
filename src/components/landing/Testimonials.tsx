import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Propriétaire",
    location: "Mérignac",
    image: "",
    initials: "SM",
    text: "Enfin des soirées d'été tranquilles ! Notre piscine et notre terrasse sont redevenues un vrai plaisir. L'équipe a été très professionnelle et discrète.",
    rating: 5,
  },
  {
    name: "Jean-Pierre Dubois",
    role: "Restaurateur",
    location: "Bordeaux Centre",
    image: "",
    initials: "JD",
    text: "Nos clients peuvent enfin profiter de notre terrasse sans être dérangés. Un vrai plus pour notre chiffre d'affaires estival. Je recommande vivement !",
    rating: 5,
  },
  {
    name: "Marie Lefebvre",
    role: "Gérante de camping",
    location: "Arcachon",
    image: "",
    initials: "ML",
    text: "Intervention rapide et efficace sur tout notre camping. Les retours clients sont excellents depuis le traitement. Partenaire de confiance.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 section-alt">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ils Nous Font
            <span className="text-primary"> Confiance</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Découvrez les retours de nos clients satisfaits à travers toute la Gironde.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-soft bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cta text-cta" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
