import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-magenta/10 to-yellow/10"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-cyan/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-magenta/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 bg-cyan/10 rounded-full mb-6">
              <span className="text-cyan font-semibold text-sm">🚀 С 2010 года на рынке</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ваш надёжный партнёр в мире
              <span className="bg-gradient-to-r from-cyan via-magenta to-yellow bg-clip-text text-transparent"> полиграфии</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Полный спектр рекламно-полиграфических услуг для бизнеса любого масштаба. Качество, скорость, профессионализм.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-cyan to-deep-blue hover:opacity-90 text-white">
                <Icon name="FileText" size={20} className="mr-2" />
                Получить расчёт
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                <Icon name="Play" size={20} className="mr-2" />
                О производстве
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Завершённых проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-magenta mb-1">15</div>
                <div className="text-sm text-muted-foreground">Лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan via-magenta to-yellow rounded-3xl opacity-20 blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 bg-cyan rounded-full"></div>
                <div className="w-3 h-3 bg-magenta rounded-full"></div>
                <div className="w-3 h-3 bg-yellow rounded-full"></div>
              </div>
              <img 
                src="https://cdn.poehali.dev/projects/e6b6d506-e991-4375-ac05-d344ada55de2/files/b9b80463-14fb-462a-a2b9-e0a024bb61d1.jpg" 
                alt="Производство" 
                className="w-full h-80 object-cover rounded-2xl mb-4"
              />
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-cyan h-16 rounded-lg opacity-80"></div>
                <div className="bg-magenta h-16 rounded-lg opacity-80"></div>
                <div className="bg-yellow h-16 rounded-lg opacity-80"></div>
                <div className="bg-dark h-16 rounded-lg opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
