import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const portfolio = [
  { id: 1, title: 'Световой короб для кафе "Время"', category: 'Световые короба' },
  { id: 2, title: 'Баннер 6×3м для строительной компании', category: 'Широкоформатная печать' },
  { id: 3, title: 'Каталог продукции 50 страниц', category: 'Офсетная печать' },
  { id: 4, title: 'Этикетки для продуктов питания', category: 'Флексография' },
  { id: 5, title: 'Логотип и фирменный стиль IT-стартапа', category: 'Дизайн' },
  { id: 6, title: 'Визитки и листовки для салона красоты', category: 'Цифровая печать' }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow/10 rounded-full mb-4">
            <span className="text-yellow font-semibold text-sm">Портфолио</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши работы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реализованные проекты для компаний различных отраслей
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((item, index) => (
            <Card 
              key={item.id}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.id <= 3 ? "https://cdn.poehali.dev/projects/e6b6d506-e991-4375-ac05-d344ada55de2/files/01cc5a47-c8ac-41f7-9cbe-983bcec144b1.jpg" : "https://cdn.poehali.dev/projects/e6b6d506-e991-4375-ac05-d344ada55de2/files/354eca62-9e7f-4b57-87a8-d33816808eaa.jpg"} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <Icon name="ZoomIn" size={24} className="text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-xs font-semibold text-cyan mb-2">{item.category}</div>
                <h3 className="font-bold text-lg">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
