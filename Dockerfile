FROM node:18.18.2-slim

WORKDIR /app

COPY ./ ./

RUN npm i

EXPOSE 3002

CMD npm start