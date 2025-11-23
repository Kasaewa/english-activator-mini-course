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
              <span className="text-primary">{siteTexts.hero.title.accent}</span>{" "}
              {siteTexts.hero.title.end}
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
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {siteTexts.problem.issues.map((problem, index) => (
                <Card key={index} className="border-2 border-destructive/20 hover:border-destructive/40 transition-all">
                  <CardContent className="p-6 flex items-start gap-4">
                    <X className="w-6 h-6 text-destructive shrink-0 mt-1" />
                    <p className="text-lg">{problem}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-secondary/50 rounded-2xl p-8 text-center">
              <p className="text-xl leading-relaxed">
                Jeśli czujesz, że to o Tobie – <span className="font-semibold text-primary">{siteTexts.problem.solution.calm}</span>. 
                To nie brak talentu. <span className="font-semibold">{siteTexts.problem.solution.emphasis}</span>
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
              Zestaw prostych, szybkich praktyk, które <span className="font-semibold text-primary">aktywują Twój mózg</span>. 
              Szkoła i podręczniki tego nie dają. To metoda na wyjście z kołowrotka stresu i wstydu.
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

      {/* Bonuses Section */}
      <section className="py-20 bg-secondary/30">
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
                        <span className="font-semibold">Talk & Chill Room</span> – dostęp na 30 dni 
                        do naszej społeczności, gdzie ćwiczysz mówienie w bezpiecznej atmosferze
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

      {/* About Author Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Kim jestem i dlaczego możesz mi zaufać?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src={nataliaPortrait} 
                  alt="Natalia Chas - SUN Mentoring School" 
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
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Co mówią moje uczestniczki?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-warm transition-all">
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed">
                    "Zajęcia indywidualne od pół roku. Wzrost pewności siebie już po kilku godzinach!"
                  </p>
                  <p className="font-semibold text-primary">— Malwina</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-warm transition-all">
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed">
                    "Bariera językowa ze szkoły przełamana w 3 miesiące. To działa!"
                  </p>
                  <p className="font-semibold text-primary">— Agata</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-warm transition-all border-2 border-primary">
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed font-semibold">
                    "Od zera i strachu przed 'hello' do awansu na stanowisko Andona w UK!"
                  </p>
                  <p className="font-semibold text-primary">— Ania's Story</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Dla kogo jest ten program?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                  <Check className="w-8 h-8" />
                  Dla kogo?
                </h3>
                <div className="space-y-4">
                  {[
                    "Uczysz się lub uczyłaś angielskiego, ale w praktyce nie mówisz",
                    "Chcesz prostej rutyny bez godzin studiowania",
                    "Potrzebujesz pewności siebie w mówieniu",
                    "Wracasz do angielskiego po przerwie",
                    "Szukasz metody, która łączy naukę z przyjemnością"
                  ].map((item, index) => (
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
                  Dla kogo NIE?
                </h3>
                <div className="space-y-4">
                  {[
                    "Dzieci poniżej 16 roku życia",
                    "Osoby na poziomie C2 / Native speakers",
                    "Osoby szukające kursu gramatycznego",
                    "Osoby, które nie będą robić ćwiczeń",
                    "Osoby oczekujące magicznej formuły bez pracy"
                  ].map((item, index) => (
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
                Zacznij dziś za <span className="text-7xl md:text-8xl">47 PLN</span>
              </h2>
              <p className="text-xl opacity-90">
                Zamiast płacić tysiące za długie kursy – zainwestuj w metodę, która działa
              </p>
            </div>
            
            <Card className="border-4 border-accent-foreground/20">
              <CardContent className="p-10 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-card-foreground">Co dostajesz w pakiecie?</h3>
                  {[
                    "6 filmów VOD z aktywatorami (łącznie ~95 minut)",
                    "Dostęp na 3 lata do wszystkich materiałów",
                    "E-book z 30-dniowym planem treningowym",
                    "Checklista aktywatorów do wydruku",
                    "Zestaw afirmacji (audio + PDF)",
                    "BONUS: Talk & Chill Room na 30 dni (dla pierwszych 20 osób)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <p className="text-lg text-card-foreground">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-primary/10 rounded-xl p-6 text-center">
                  <p className="text-2xl font-bold text-card-foreground mb-2">
                    Wartość pakietu: <span className="line-through text-muted-foreground">397 PLN</span>
                  </p>
                  <p className="text-4xl font-bold text-primary">Twoja cena: 47 PLN</p>
                </div>
                
                <Button 
                  variant="default" 
                  size="xl" 
                  className="w-full text-xl h-16 bg-card text-card-foreground hover:bg-card/90 shadow-warm"
                  onClick={scrollToPrice}
                >
                  Dołączam do programu English Activator
                </Button>
                
                <p className="text-center text-sm text-card-foreground/70">
                  💳 Bezpieczna płatność • 🔒 Faktura automatyczna • ⚡ Dostęp natychmiast
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
              Najczęściej zadawane pytania
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Jak długo mam dostęp do kursu?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Masz dostęp przez pełne 3 lata od momentu zakupu. To wystarczająco dużo czasu, 
                  żeby wrócić do materiałów wielokrotnie i utrwalić nawyki.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Czy dostanę fakturę?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Tak! Faktura jest generowana automatycznie po dokonaniu płatności. 
                  Otrzymasz ją na podany adres email.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Dla jakiego poziomu jest ten kurs?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Kurs jest idealny dla poziomów A1 do C1. Jeśli zaczynasz od zera (A0), 
                  również możesz skorzystać, ale niektóre praktyki będą wymagały więcej czasu i cierpliwości.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Ile czasu dziennie muszę poświęcić?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Aktywatory są zaprojektowane tak, żeby zajmowały 5-15 minut dziennie. 
                  Możesz robić więcej, jeśli chcesz, ale nawet regularne 10 minut dziennie 
                  da Ci zauważalne efekty.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Co jeśli nie będzie mi to pasować?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Jeśli w ciągu pierwszych 14 dni stwierdzisz, że program nie jest dla Ciebie, 
                  skontaktuj się ze mną, a zwrócę Ci pieniądze. Bez pytań.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Czy to zastąpi mi kurs angielskiego?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Aktywatory to nie jest pełny kurs gramatyczny. To zestaw praktyk, które 
                  uzupełniają naukę i pomagają wyjść z pętli "wiem, ale nie używam". 
                  Jeśli potrzebujesz systematycznej nauki od podstaw, polecam połączenie 
                  aktywatorów z kursem lub zajęciami indywidualnymi.
                </AccordionContent>
              </AccordionItem>
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
              Gotowa, żeby aktywować swój angielski?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Dołącz do kobiet, które już przełamały barierę językową i mówią po angielsku 
              z pewnością siebie. Twoja kolej na zmianę!
            </p>
            <Button 
              variant="default" 
              size="xl" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-xl"
              onClick={scrollToPrice}
            >
              Zaczynam za 47 PLN
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
                <span className="text-xl font-bold">SUN Mentoring School</span>
              </div>
              <p className="text-muted-foreground">
                © 2025 SUN Mentoring Natalia Chas. Wszelkie prawa zastrzeżone.
              </p>
              <div className="flex justify-center gap-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Regulamin
                </a>
                <span className="text-muted-foreground">•</span>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Polityka Prywatności
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
