import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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

const portfolio = [
  { id: 1, title: 'Световой короб для кафе "Время"', category: 'Световые короба' },
  { id: 2, title: 'Баннер 6×3м для строительной компании', category: 'Широкоформатная печать' },
  { id: 3, title: 'Каталог продукции 50 страниц', category: 'Офсетная печать' },
  { id: 4, title: 'Этикетки для продуктов питания', category: 'Флексография' },
  { id: 5, title: 'Логотип и фирменный стиль IT-стартапа', category: 'Дизайн' },
  { id: 6, title: 'Визитки и листовки для салона красоты', category: 'Цифровая печать' }
];

const testimonials = [
  { id: 1, name: 'Алексей Морозов', company: 'ООО "СтройПроект"', text: 'Сотрудничаем с Грант-Дизайн уже 3 года. Всегда высокое качество и точные сроки. Рекомендуем!', rating: 5 },
  { id: 2, name: 'Екатерина Волкова', company: 'Сеть кафе "Уют"', text: 'Делали световые короба для всех наших заведений. Результат превзошел ожидания - яркие, качественные, работают безотказно.', rating: 5 },
  { id: 3, name: 'Дмитрий Соколов', company: 'Интернет-магазин "Товары+"', text: 'Отличный дизайн логотипа и фирменный стиль. Команда профессионалов, которые слышат клиента.', rating: 5 }
];

export default function Index() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan via-magenta to-yellow rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ГД</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-dark">Грант-Дизайн</h1>
              <p className="text-xs text-muted-foreground">Рекламно-полиграфический центр</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-cyan transition-colors">Услуги</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-cyan transition-colors">Портфолио</a>
            <a href="#reviews" className="text-sm font-medium hover:text-cyan transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-cyan transition-colors">Контакты</a>
          </nav>
          <Button className="bg-cyan hover:bg-cyan/90">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

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
                onClick={() => setSelectedService(service)}
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

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan/10 rounded-full mb-4">
              <span className="text-cyan font-semibold text-sm">Отзывы</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят наши клиенты</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <Card 
                key={review.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow fill-yellow" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan to-magenta rounded-full flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-block px-4 py-2 bg-magenta/10 rounded-full mb-4">
                <span className="text-magenta font-semibold text-sm">Контакты</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение 15 минут.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-cyan" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    <div className="text-muted-foreground">+7 (495) 987-65-43</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-magenta/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-magenta" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">info@grant-design.ru</div>
                    <div className="text-muted-foreground">order@grant-design.ru</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-yellow" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Полиграфическая, д. 15</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Телефон</label>
                    <Input 
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-cyan to-magenta hover:opacity-90 text-white">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan via-magenta to-yellow rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">ГД</span>
                </div>
                <div className="font-bold text-lg">Грант-Дизайн</div>
              </div>
              <p className="text-sm text-gray-400">
                Рекламно-полиграфический центр полного цикла
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan transition-colors">Световые короба</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Широкоформатная печать</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Офсетная печать</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-cyan transition-colors">Отзывы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@grant-design.ru</li>
                <li>г. Москва, ул. Полиграфическая, 15</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 Грант-Дизайн. Все права защищены.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
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
    </div>
  );
}