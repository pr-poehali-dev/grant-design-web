import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
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
  );
}
