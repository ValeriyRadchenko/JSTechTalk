FROM node:8-alpine

ENV HOME=/app
WORKDIR $HOME

COPY ./package.json $HOME
COPY ./package-lock.json $HOME
RUN npm install

COPY ./server.js $HOME

EXPOSE 3000

CMD ["npm", "start"]
