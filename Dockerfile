FROM node:19.9.0-alpine3.18

WORKDIR /app

COPY ./package*.json ./

COPY ./dist ./dist

EXPOSE 4000

RUN npm i

CMD ["npm", "start"]
