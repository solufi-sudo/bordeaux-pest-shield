import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import AboutUs from "@/components/landing/AboutUs";
import Method from "@/components/landing/Method";
import ForWho from "@/components/landing/ForWho";
import Stats from "@/components/landing/Stats";
import Testimonials from "@/components/landing/Testimonials";
import Certifications from "@/components/landing/Certifications";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import FloatingCTA from "@/components/landing/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* HEAD - Accroche & Promesse */}
      <Hero />
      <TrustBar />
      
      {/* BODY - Autorité & Processus */}
      <AboutUs />
      <Method />
      <ForWho />
      
      {/* Preuves Sociales */}
      <Stats />
      <Testimonials />
      <Certifications />
      
      {/* CLOSE - Conversion */}
      <CTASection />
      
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
