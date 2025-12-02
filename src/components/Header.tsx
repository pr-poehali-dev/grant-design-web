import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
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
  );
}
