import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 'lightbox',
    title: 'Световые короба',
    icon: 'Lightbulb',
    description: 'Яркие и заметные световые конструкции для вашего бизнеса',
    details: 'Производство световых коробов любой сложности с использованием современных LED-технологий',
    features: ['Долговечные LED-модули', 'Энергоэффективность', 'Индивидуальный дизайн', 'Монтаж "под ключ"']
  },
  {
    id: 'wideformat',
    title: 'Широкоформатная печать',
    icon: 'Maximize',
    description: 'Печать баннеров, плакатов и наружной рекламы',
    details: 'Высококачественная широкоформатная печать на любых материалах до 5 метров шириной',
    features: ['Разрешение до 1440 dpi', 'Печать на баннере, холсте, пленке', 'Быстрые сроки', 'Водостойкие чернила']
  },
  {
    id: 'offset',
    title: 'Офсетная печать',
    icon: 'FileText',
    description: 'Качественная печать больших тиражей',
    details: 'Офсетная печать для каталогов, журналов, брошюр с превосходным качеством',
    features: ['Тиражи от 500 экз.', 'Множество форматов', 'Pantone цвета', 'Высокая скорость']
  },
  {
    id: 'flexo',
    title: 'Флексографическая печать',
    icon: 'Package',
    description: 'Печать на упаковке и этикетках',
    details: 'Флексопечать для производства этикеток, упаковки и гибких материалов',
    features: ['Печать на пленке, картоне', 'Пищевые чернила', 'Высокая производительность', 'Малые и большие тиражи']
  },
  {
    id: 'logo',
    title: 'Разработка логотипов',
    icon: 'Palette',
    description: 'Профессиональный брендинг для вашей компании',
    details: 'Создание уникальных логотипов и фирменного стиля, которые выделят ваш бренд',
    features: ['3-5 вариантов концепций', 'Исходники в векторе', 'Брендбук', 'Бесплатные правки']
  },
  {
    id: 'digital',
    title: 'Цифровая печать',
    icon: 'Printer',
    description: 'Быстрая печать малых тиражей',
    details: 'Цифровая печать визиток, листовок, буклетов с мгновенными сроками',
    features: ['Тиражи от 1 экз.', 'Готовность за 24 часа', 'Персонализация', 'Высокое качество']
  }
];

interface ServicesSectionProps {
  selectedService: Service | null;
  onServiceSelect: (service: Service | null) => void;
}

export default function ServicesSection({ selectedService, onServiceSelect }: ServicesSectionProps) {
  return (
    <>
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-magenta/10 rounded-full mb-4">
              <span className="text-magenta font-semibold text-sm">Наши услуги</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Комплексные решения для вашего бизнеса</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От разработки дизайна до производства — всё под одной крышей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-cyan animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => onServiceSelect(service)}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan/20 to-magenta/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={32} className="text-cyan" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center text-cyan font-semibold text-sm">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedService} onOpenChange={() => onServiceSelect(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl">
              {selectedService && (
                <>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan/20 to-magenta/20 rounded-xl flex items-center justify-center">
                    <Icon name={selectedService.icon} size={24} className="text-cyan" />
                  </div>
                  {selectedService.title}
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-base pt-4">
              {selectedService?.details}
            </DialogDescription>
          </DialogHeader>
          
          {selectedService && (
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-cyan" />
                  Преимущества
                </h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-cyan mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-3">
                <Button className="flex-1 bg-gradient-to-r from-cyan to-magenta hover:opacity-90">
                  <Icon name="FileText" size={18} className="mr-2" />
                  Получить расчёт
                </Button>
                <Button variant="outline" className="flex-1">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
