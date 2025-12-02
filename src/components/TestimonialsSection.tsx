import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const testimonials = [
  { id: 1, name: 'Алексей Морозов', company: 'ООО "СтройПроект"', text: 'Сотрудничаем с Грант-Дизайн уже 3 года. Всегда высокое качество и точные сроки. Рекомендуем!', rating: 5 },
  { id: 2, name: 'Екатерина Волкова', company: 'Сеть кафе "Уют"', text: 'Делали световые короба для всех наших заведений. Результат превзошел ожидания - яркие, качественные, работают безотказно.', rating: 5 },
  { id: 3, name: 'Дмитрий Соколов', company: 'Интернет-магазин "Товары+"', text: 'Отличный дизайн логотипа и фирменный стиль. Команда профессионалов, которые слышат клиента.', rating: 5 }
];

export default function TestimonialsSection() {
  return (
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
  );
}
