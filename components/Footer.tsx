'use client'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-xl font-light text-black mb-4 tracking-wide">
              Beauty Salon
            </h3>
            <p className="text-xs text-gray-500 font-light">
              Ваша красота - наша страсть
            </p>
          </div>

          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-light">
              Контакты
            </h4>
            <div className="space-y-2 text-sm text-gray-600 font-light">
              <p>г. Бишкек, пр. Чуй, 168</p>
              <p>+996 (312) 62-45-67</p>
              <p>Пн-Вс: 9:00-21:00</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-light">
              Социальные сети
            </h4>
            <div className="flex space-x-4">
              {['Instagram', 'Facebook', 'Telegram'].map((name, index) => (
                <button
                  key={index}
                  className="text-xs text-gray-600 hover:text-black transition-colors font-light"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-xs text-gray-400 font-light">
          <p>© {new Date().getFullYear()} Beauty Salon. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
