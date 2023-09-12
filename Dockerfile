FROM node:16-alpine 

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000 8080

CMD [ "npm", "run", "start:dev" ]
