import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Sun, 
  X, 
  Check, 
  Headphones, 
  MessageCircle, 
  BookOpen, 
  PenTool, 
  Sparkles, 
  Heart,
  Star,
  Gift,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import nataliaPortrait from "@/assets/natalia-portrait.jpg";
import history1 from "@/assets/history1.png";
import opinia1 from "@/assets/opinia1.png";
import opinia2 from "@/assets/opinia2.png";
import opinia3 from "@/assets/opinia3.png";
import opinia4 from "@/assets/opinia4.png";
import casestudy1 from "@/assets/casestudy1.png";
import casestudy2 from "@/assets/casestudy2.png";
import { siteTexts } from "@/content/texts";
import { useState, useEffect } from "react";

// Komponent karuzeli dla testimoniali
const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Mapowanie obrazów
  const testimonialImages = [opinia1, opinia2, opinia3, opinia4];
  
  const testimonials = siteTexts.testimonialScreens.testimonials.map((testimonial, index) => ({
    ...testimonial,
    image: testimonialImages[index]
  }));

  // Automatyczne przewijanie co 5 sekund
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            {siteTexts.testimonialScreens.title}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            ({siteTexts.testimonialScreens.subtitle})
          </p>
          
          {/* Karuzela */}
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="relative flex items-center justify-center">
                  {/* Przyciski nawigacji */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                    onClick={goToNext}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>

                  {/* Kontener obrazu - responsywny dla różnych orientacji */}
                  <div className={`relative mx-auto ${
                    currentTestimonial.orientation === 'vertical' 
                      ? 'w-full max-w-sm' 
                      : 'w-full max-w-2xl'
                  }`}>
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.alt}
                      className={`rounded-lg shadow-warm w-full ${
                        currentTestimonial.orientation === 'vertical'
                          ? 'max-h-[600px] object-contain'
                          : 'max-h-[500px] object-contain'
                      }`}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Wskaźniki */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
            
            {/* Licznik */}
            <p className="text-center text-muted-foreground mt-4">
              {currentIndex + 1} z {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCurriculum = () => {
    document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero + Problem Section */}
      <section 
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(252, 243, 224, 0.95) 0%, rgba(252, 231, 203, 0.9) 100%), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in mb-12">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {siteTexts.hero.title.main}{" "}
              <span className="text-primary">{siteTexts.hero.title.accent}</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">
              {siteTexts.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={scrollToPrice}
                className="group"
              >
                {siteTexts.hero.cta}
                <Sparkles className="ml-2 group-hover:animate-pulse" />
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                onClick={scrollToCurriculum}
                className="group border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                {siteTexts.hero.ctaSecondary}
                <BookOpen className="ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Problem Content */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-1 gap-6 mb-8">
              <Card className="border-2 border-destructive/20 hover:border-destructive/40 transition-all bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <p className="text-lg leading-relaxed">{siteTexts.problem.issues[0]}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <p className="text-xl leading-relaxed">
                {siteTexts.problem.solution.textStart} <span className="font-semibold text-primary">{siteTexts.problem.solution.calm}</span>. 
                {siteTexts.problem.solution.textMiddle} <span className="font-semibold">{siteTexts.problem.solution.emphasis}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              {siteTexts.solution.title}
            </h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              {siteTexts.solution.description}
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{siteTexts.solution.features.simple.title}</h3>
                  <p className="text-muted-foreground">{siteTexts.solution.features.simple.description}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{siteTexts.solution.features.pleasant.title}</h3>
                  <p className="text-muted-foreground">{siteTexts.solution.features.pleasant.description}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{siteTexts.solution.features.effective.title}</h3>
                  <p className="text-muted-foreground">{siteTexts.solution.features.effective.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              {siteTexts.benefits.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {siteTexts.benefits.items.map((benefit, index) => (
                <div key={index} className="bg-card p-4 rounded-lg">
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Personal reflection section */}
            <div className="bg-card rounded-2xl p-8 mb-12">
              <p className="text-lg leading-relaxed mb-6">
                {siteTexts.benefits.personalReflection.firstParagraph}
              </p>
              <p className="text-lg leading-relaxed">
                {siteTexts.benefits.personalReflection.secondParagraph}
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="text-center mt-12">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={scrollToPrice}
                className="group"
              >
                {siteTexts.buttons.joinNow}
                <Sparkles className="ml-2 group-hover:animate-pulse" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Screens Section */}
      <TestimonialCarousel />

      {/* Why Created Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              {siteTexts.whyCreated.title}
            </h2>
            <p className="text-xl leading-relaxed">
              {siteTexts.whyCreated.description}
            </p>
            <div className="bg-card rounded-2xl p-8">
              <p className="text-xl leading-relaxed font-medium text-primary">
                {siteTexts.whyCreated.mission}
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="text-center mt-12">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={scrollToPrice}
                className="group"
              >
                {siteTexts.buttons.joinNow}
                <Sparkles className="ml-2 group-hover:animate-pulse" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Author Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              {siteTexts.author.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <img 
                  src={nataliaPortrait} 
                  alt={siteTexts.author.imageAlt} 
                  className="rounded-full shadow-warm w-full aspect-square object-cover"
                />
              </div>
              
              <div className="order-1 md:order-2 space-y-6">
                <h3 className="text-3xl font-bold text-primary">{siteTexts.author.name}</h3>
                <p className="text-lg leading-relaxed">
                  {siteTexts.author.description}
                </p>
                <div className="space-y-4">
                  {siteTexts.author.credentials.map((credential, index) => (
                    <div key={index}>
                      <p>{credential}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What makes special */}
            <div className="bg-secondary/30 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-primary">{siteTexts.author.whatMakesSpecial.title}</h3>
              <div className="space-y-4">
                {siteTexts.author.whatMakesSpecial.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Important Section */}
            <div className="bg-gradient-hero rounded-2xl p-8 space-y-8">              
              <div>
                <h4 className="text-xl font-bold mb-4">{siteTexts.author.personalStory.whyImportant.title}</h4>
                <p className="text-lg leading-relaxed mb-6">{siteTexts.author.personalStory.whyImportant.problem}</p>
                
                {/* Image */}
                <div className="my-6">
                  <img
                    src={history1}
                    alt={siteTexts.author.personalStory.whyImportant.imageAlt}
                    className="rounded-lg shadow-warm w-full object-cover"
                  />
                </div>
                
                <p className="text-lg leading-relaxed font-medium text-primary">{siteTexts.author.personalStory.whyImportant.solution}</p>
              </div>
              
              {/* Atmosphere Section */}
              <div className="bg-card/50 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">{siteTexts.author.personalStory.atmosphere.title}</h4>
                <p className="text-lg leading-relaxed mb-4">{siteTexts.author.personalStory.atmosphere.description}</p>
                <p className="text-lg font-semibold text-primary">{siteTexts.author.personalStory.atmosphere.invitation}</p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="text-center mt-12">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={scrollToPrice}
                className="group"
              >
                {siteTexts.buttons.joinNow}
                <Sparkles className="ml-2 group-hover:animate-pulse" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {siteTexts.curriculum.title}
              </h2>
              <p className="text-xl text-muted-foreground">{siteTexts.curriculum.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteTexts.curriculum.modules.map((module, index) => {
                const icons = [Headphones, MessageCircle, BookOpen, PenTool, Sparkles, Heart];
                const IconComponent = icons[index];
                return (
                <Card key={index} className="hover:shadow-warm transition-all group">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{module.title}</h3>
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground">
                          {module.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{module.description}</p>
                    </div>
                  </CardContent>
                </Card>
                );
              })}
            </div>
            
            {/* CTA Button */}
            <div className="text-center mt-16">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={scrollToPrice}
                className="group"
              >
                {siteTexts.buttons.joinNow}
                <Sparkles className="ml-2 group-hover:animate-pulse" />
              </Button>
            </div>
          </div>
        </div>
      </section>

{/* Bonuses Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Gift className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {siteTexts.bonuses.title}
              </h2>
            </div>
            
            {/* Specjalny bonus dla pierwszych 20 osób */}
            <Card className="mb-8 border-2 border-primary bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Gift className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      {siteTexts.bonuses.specialBonus.title}
                    </h3>
                    <p className="text-base leading-relaxed">
                      {siteTexts.bonuses.specialBonus.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              {siteTexts.bonuses.regularBonuses.map((bonus, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{bonus.title}</h3>
                    <p className="text-muted-foreground">{bonus.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              {siteTexts.targetAudience.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                  <Check className="w-8 h-8" />
                  {siteTexts.targetAudience.forWho.title}
                </h3>
                <div className="space-y-4">
                  {siteTexts.targetAudience.forWho.items.map((item, index) => (
                    <div key={index} className="bg-card p-4 rounded-lg">
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-destructive flex items-center gap-3">
                  <X className="w-8 h-8" />
                  {siteTexts.targetAudience.notForWho.title}
                </h3>
                <div className="space-y-4">
                  {siteTexts.targetAudience.notForWho.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-destructive/20">
                      <X className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Summary for A0 level */}
            <div className="mt-12 bg-gradient-hero rounded-xl p-6 text-center">
              <p className="text-lg leading-relaxed">
                {siteTexts.targetAudience.summary}
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="text-center mt-12">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={scrollToPrice}
                className="group"
              >
                {siteTexts.buttons.joinNow}
                <Sparkles className="ml-2 group-hover:animate-pulse" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
        
            
            <div className="space-y-6">
              {siteTexts.personalStory.content.map((paragraph, index) => (
                <div key={index} className="bg-secondary/20 rounded-xl p-6">
                  <p 
                    className="text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    }}
                  />
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="text-center mt-12">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={scrollToPrice}
                className="group"
              >
                {siteTexts.buttons.joinNow}
                <Sparkles className="ml-2 group-hover:animate-pulse" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              {siteTexts.caseStudy.title}
            </h2>
            
            <div className="space-y-8">
              <Card className="bg-card">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed mb-6">{siteTexts.caseStudy.intro}</p>
                  <p className="text-lg leading-relaxed text-destructive font-medium">{siteTexts.caseStudy.problem}</p>
                </CardContent>
              </Card>

              {/* Image BEFORE */}
              <Card className="border-2 border-primary bg-primary/5">
                <CardContent className="p-8">
                  <img
                    src={casestudy1}
                    alt="Ania przed kursem - opinia o trudnościach w nauce angielskiego"
                    className="rounded-lg shadow-warm w-full max-w-2xl mx-auto object-contain"
                  />
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed mb-6">{siteTexts.caseStudy.solution}</p>
                </CardContent>
              </Card>

              {/* Image AFTER */}
              <Card className="border-2 border-primary bg-primary/5">
                <CardContent className="p-8">
                  <img
                    src={casestudy2}
                    alt="Ania po kursie - opinia o sukcesie i awansie w pracy"
                    className="rounded-lg shadow-warm w-full max-w-2xl mx-auto object-contain"
                  />
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-primary font-semibold">{siteTexts.caseStudy.result}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      

      

      {/* Pricing Section - Part 1 */}
      <section id="pricing" className="py-20 bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                {siteTexts.pricing.title} <span className="text-7xl md:text-8xl">{siteTexts.pricing.price}</span>
              </h2>
              <p className="text-xl opacity-90">
                {siteTexts.pricing.subtitle}
              </p>
            </div>
            
            <Card className="border-4 border-accent-foreground/20">
              <CardContent className="p-10 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-card-foreground">{siteTexts.pricing.packageTitle}</h3>
                  {siteTexts.pricing.packageItems.map((item, index) => (
                    <div key={index}>
                      <p className="text-lg text-card-foreground">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Bonuses Section */}
                <div className="space-y-4 border-t border-accent-foreground/20 pt-6">
                  <h3 className="text-2xl font-bold text-card-foreground">{siteTexts.pricing.bonuses.title}</h3>
                  {siteTexts.pricing.bonuses.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Gift className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <p className="text-lg text-card-foreground">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-primary/10 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-4">CENA: {siteTexts.pricing.price}</p>
                </div>
                
                <Button 
                  variant="default" 
                  size="xl" 
                  className="w-full text-xl h-16 bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold"
                  onClick={scrollToPrice}
                >
                  🎯 {siteTexts.pricing.cta}
                </Button>
                
                <p className="text-center text-sm text-card-foreground/70">
                  {siteTexts.pricing.guarantee}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Separator */}
      <div className="py-4 bg-background"></div>

{/* Pricing Section - Part 2 */}
      <section className="py-20 bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-4 border-accent-foreground/20">
              <CardContent className="p-10 space-y-6">
                <h3 className="text-xl font-bold text-card-foreground text-center mb-6">
                  {siteTexts.pricing.targetProblems.title}
                </h3>
                <div className="space-y-4">
                  {siteTexts.pricing.targetProblems.items.map((item, index) => (
                    <div key={index}>
                      <p className="text-lg text-card-foreground">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 rounded-xl p-6 text-center mt-8">
                  <p className="text-4xl font-bold text-primary mb-4">CENA: {siteTexts.pricing.price}</p>
                </div>
                
                <Button 
                  variant="default" 
                  size="xl" 
                  className="w-full text-xl h-16 bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-bold"
                  onClick={scrollToPrice}
                >
                  🎯 {siteTexts.pricing.cta}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              {siteTexts.faq.title}
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {siteTexts.faq.questions.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2">
                <Sun className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold">{siteTexts.footer.company}</span>
              </div>
              <p className="text-muted-foreground">
                {siteTexts.footer.copyright}
              </p>
              <div className="flex justify-center gap-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {siteTexts.footer.links.terms}
                </a>
                <span className="text-muted-foreground">•</span>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {siteTexts.footer.links.privacy}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;