module.exports = {
  preset: 'ts-jest', // Использовать ts-jest для использования TypeScript
  testEnvironment: 'jsdom', // Использовать браузерное окружение, вместо Node для тестирования DOM элементов.
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Импорт библиотеки для добавления дополнительных методов-условий проверки для expect()
  transform: {
    // следующие настройки увеличивают скорость тестов
    'node_modules/.+\\.(j|t)sx?$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub', // Заглушки для указанных типов файлов, импортируемых в тестируемые модули/компоненты и т.д.
  },
  moduleNameMapper: {
    // Настройка поддержки алиасов (псевдонимов пути)
    'swiper/react': '<rootDir>/node_modules/swiper/react/swiper-react.js', // Алиас пути к модулю слайдера Swiper. Слайдер Swiper использует новейший тип модулей JS - EMS, которые пока jest не поддерживает.
    '^@src(.*)$': '<rootDir>/src$1', // в алиасах можно использовать регулярные выражения
    '^@img(.*)$': '<rootDir>/src/imeges$1', // <rootDir> - подставляет путь до корневой дериктории
    '^@styles(.*)$': '<rootDir>/src/styles$1',
  },
  transformIgnorePatterns: ['node_modules/(?!(swiper|ssr-window|dom7)/)'], // исключение проверки доп. модулей EMS импортируемых внутри модуля Swiper слайдера.
}
