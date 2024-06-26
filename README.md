# Выполненное задание для AirNet

## Описание проекта

Этот проект представляет собой веб-приложение, разработанное с использованием следующих технологий:
- React
- TypeScript
- Vite
- Docker

Проект включает в себя структуру папок для организации кода, включая компоненты, API вызовы, стили и типы.

## Структура проекта

```bash
src/
├── api/ # Папка для API вызовов
├── assets/ # Папка для статических ресурсов (изображения, шрифты и т.д.)
├── components/ # Папка для компонентов React
├── helper/ # Папка для вспомогательных функций
├── store/ # Папка для состояния и хранилища
├── types/ # Папка для TypeScript типов и интерфейсов
├── App.css # Стили для главного компонента приложения
├── App.tsx # Главный компонент приложения
├── index.css # Глобальные стили приложения
├── main.tsx # Точка входа для приложения
├── vite-env.d.ts # Типы окружения для Vite
```

## Установка и запуск проекта

### Предварительные требования

Убедитесь, что у вас установлены следующие инструменты:
- Node.js
- Docker

### Установка зависимостей
Для запуска проекта необходимо склонировать репозиторий [https://github.com/llladno/AirNet.git](https://github.com/llladno/AirNet.git)

```bash
git clone https://github.com/llladno/AirNet.git
```

Перейти в папку с проектом
```bash
cd AirNet
```

Для установки зависимостей выполните следующую команду:

```bash
npm install
```
### Запуск с использованием Docker

Для сборки  Docker-образа необходимо выполнить команду:
```bash
docker build -t web .
```

Для запуска Docker-контейнера выполните следующую команду:
```bash
docker run -d -p 80:80 web
```

## Работа с приложением
Для просмотра готового приложения необходимо перейти по адресу [localhost](http://localhost/) в браузере
