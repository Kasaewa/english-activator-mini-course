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
  Gift
} from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import nataliaPortrait from "@/assets/natalia-portrait.jpg";
import { siteTexts } from "@/content/texts";

const Index = () => {
  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(252, 243, 224, 0.95) 0%, rgba(252, 231, 203, 0.9) 100%), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-warm">
              <Sun className="w-6 h-6 text-primary" />
              <span className="font-semibold text-primary">{siteTexts.hero.badge}</span>
            </div>
            
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
            </div>
            
            <p className="text-sm text-muted-foreground pt-4">
              {siteTexts.hero.guarantee}
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              {siteTexts.problem.title}
            </h2>
            
            <div className="grid md:grid-cols-1 gap-6 mb-12">
              <Card className="border-2 border-destructive/20 hover:border-destructive/40 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    
                    <p className="text-lg leading-relaxed">{siteTexts.problem.issues[0]}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-secondary/50 rounded-2xl p-8 text-center">
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
            <Sun className="w-20 h-20 text-primary mx-auto" />
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
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg">
                  <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-accent text-accent-foreground rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{siteTexts.benefits.urgency.title}</h3>
              <p className="text-lg mb-4">
                ✅ {siteTexts.benefits.urgency.positive}
              </p>
              <p className="text-lg">
                ⚠️ {siteTexts.benefits.urgency.negative}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Screens Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              {siteTexts.testimonialScreens.title}
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              ({siteTexts.testimonialScreens.subtitle})
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {siteTexts.testimonialScreens.placeholders.map((placeholder) => (
                <Card key={placeholder.id} className="hover:shadow-warm transition-all">
                  <CardContent className="p-8 space-y-4">
                    <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <Star className="w-12 h-12 mx-auto mb-2" />
                        <p className="font-medium">{placeholder.description}</p>
                        <p className="text-sm mt-1">#{placeholder.id}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                  className="rounded-2xl shadow-warm w-full"
                />
              </div>
              
              <div className="order-1 md:order-2 space-y-6">
                <h3 className="text-3xl font-bold text-primary">{siteTexts.author.name}</h3>
                <p className="text-lg leading-relaxed">
                  {siteTexts.author.description}
                </p>
                <div className="space-y-4">
                  {siteTexts.author.credentials.map((credential, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
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

            {/* Personal story */}
            <div className="bg-gradient-hero rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">{siteTexts.author.personalStory.title}</h3>
              <div className="space-y-4 text-lg">
                <p className="leading-relaxed">{siteTexts.author.personalStory.intro}</p>
                <p className="leading-relaxed">{siteTexts.author.personalStory.struggle}</p>
                <p className="leading-relaxed font-semibold text-primary">{siteTexts.author.personalStory.breakthrough}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-background">
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

              {/* Testimonial placeholder BEFORE */}
              <Card className="border-2 border-primary bg-primary/5">
                <CardContent className="p-8">
                  <div className="aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Star className="w-16 h-16 mx-auto mb-4" />
                      <p className="font-medium text-lg">{siteTexts.caseStudy.testimonialPlaceholder.before}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed mb-6">{siteTexts.caseStudy.solution}</p>
                  <p className="text-lg leading-relaxed text-primary font-semibold">{siteTexts.caseStudy.result}</p>
                </CardContent>
              </Card>

              {/* Testimonial placeholder AFTER */}
              <Card className="border-2 border-primary bg-primary/5">
                <CardContent className="p-8">
                  <div className="aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Star className="w-16 h-16 mx-auto mb-4" />
                      <p className="font-medium text-lg">{siteTexts.caseStudy.testimonialPlaceholder.after}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
            
            <div className="space-y-6">
              <Card className="border-2 border-primary bg-primary/5">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shrink-0">
                      <Star className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-primary">
                        {siteTexts.bonuses.specialBonus.title}
                      </h3>
                      <p className="text-lg">
                        <span className="font-semibold">{siteTexts.bonuses.specialBonus.roomName}</span> {siteTexts.bonuses.specialBonus.roomDescription}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {siteTexts.bonuses.regularBonuses.map((bonus, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{bonus.title}</h3>
                      <p className="text-muted-foreground">{bonus.description}</p>
                    </div>
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
                    <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg">
                      <Check className="w-6 h-6 text-primary shrink-0 mt-0.5" />
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
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <p className="text-lg text-card-foreground">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-primary/10 rounded-xl p-6 text-center">
                  <p className="text-2xl font-bold text-card-foreground mb-2">
                    {siteTexts.pricing.value.valueText} <span className="line-through text-muted-foreground">{siteTexts.pricing.value.original}</span>
                  </p>
                  <p className="text-4xl font-bold text-primary">{siteTexts.pricing.value.priceText} {siteTexts.pricing.value.current}</p>
                </div>
                
                <Button 
                  variant="default" 
                  size="xl" 
                  className="w-full text-xl h-16 bg-card text-card-foreground hover:bg-card/90 shadow-warm"
                  onClick={scrollToPrice}
                >
                  {siteTexts.pricing.cta}
                </Button>
                
                <p className="text-center text-sm text-card-foreground/70">
                  {siteTexts.pricing.guarantee}
                </p>
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

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Sun className="w-20 h-20 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold">
              {siteTexts.finalCta.title}
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {siteTexts.finalCta.subtitle}
            </p>
            <Button 
              variant="default" 
              size="xl" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-xl"
              onClick={scrollToPrice}
            >
              {siteTexts.finalCta.button}
            </Button>
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