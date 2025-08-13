FROM node:24.5-alpine3.21

WORKDIR /app

COPY package-lock.json package.json ./

RUN npm ci

COPY . .

RUN npm run build

ENV NODE_ENV=production

CMD ["npm", "run", "start"]