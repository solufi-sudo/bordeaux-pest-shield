import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="SOS Moustiques Bordeaux"
                className="h-10 w-auto object-contain"
              />
              <div className="font-black text-xl lg:text-2xl tracking-tight leading-none uppercase">
                <span className="text-[#1E5EFF]">SOS </span>
                <span className="text-[#4CAF50]">MOUSTIQUES</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Votre expert en traitement anti-moustiques à Bordeaux et en Gironde.
              Solutions professionnelles et durables.
            </p>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h4 className="font-bold text-background mb-4">Zone d'intervention</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li>Bordeaux et Métropole</li>
              <li>Mérignac, Pessac, Talence</li>
              <li>Bassin d'Arcachon</li>
              <li>Libourne et alentours</li>
              <li>Toute la Gironde (33)</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-background mb-4">Nos services</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li>Traitement anti-moustiques</li>
              <li>Traitement moustique tigre</li>
              <li>Protection jardin & terrasse</li>
              <li>Solutions professionnelles</li>
              <li>Contrats d'entretien</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-background mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+33683643822"
                  className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  06 83 64 38 22
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/33600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:solufi@yahoo.fr"
                  className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  solufi@yahoo.fr
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Bordeaux, Gironde (33)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© 2026 SOS Moustiques. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
