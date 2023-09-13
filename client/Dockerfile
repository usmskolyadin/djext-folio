FROM node:14

# Указываем рабочую директорию
WORKDIR /app

# Копируем зависимости и устанавливаем их
COPY package*.json ./
RUN yarn install

# Копируем исходный код приложения
COPY . .

# Запускаем приложение
CMD ["yarn", "run", "start"]

