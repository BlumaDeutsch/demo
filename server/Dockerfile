FROM node:20-alpine

WORKDIR /usr/src/app

COPY server/package*.json ./

RUN npm install

COPY server/ .

EXPOSE 5000

CMD ["npm", "run", "dev"]