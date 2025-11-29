# Beauty Salon - Лендинг салона красоты

Премиальный лендинг салона красоты, созданный с использованием Next.js, React, TypeScript, Tailwind CSS и Framer Motion.

## Технологии

- **Next.js 14** - React фреймворк
- **TypeScript** - типизация
- **Tailwind CSS** - стилизация
- **Framer Motion** - анимации

## Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Запустите dev-сервер:
```bash
npm run dev
```

3. Откройте браузер и перейдите по адресу:
```
http://localhost:3000
```

## Структура проекта

```
beauty/
├── app/
│   ├── globals.css      # Глобальные стили
│   ├── layout.tsx       # Корневой layout
│   └── page.tsx         # Главная страница
├── components/
│   ├── Header.tsx       # Шапка сайта
│   ├── Preloader.tsx    # Прелоадер
│   ├── Hero.tsx         # Главный экран
│   ├── Benefits.tsx     # Преимущества
│   ├── About.tsx        # О салоне
│   ├── Services.tsx     # Услуги
│   ├── Masters.tsx      # Мастера
│   ├── Reviews.tsx      # Отзывы
│   ├── FAQ.tsx          # FAQ
│   ├── CTA.tsx          # Призыв к действию
│   ├── Footer.tsx       # Подвал
│   └── ModalBooking.tsx # Модальное окно записи
└── package.json
```

## Особенности

- ✅ Полностью адаптивный дизайн
- ✅ Плавные анимации при скролле
- ✅ Интерактивные hover-эффекты
- ✅ Модальное окно для записи
- ✅ Премиальный дизайн с контрастными цветами
- ✅ Оптимизированная производительность

## Сборка для продакшена

```bash
npm run build
npm start
```

