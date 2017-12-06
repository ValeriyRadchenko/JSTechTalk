FROM node:8-alpine

ENV HOME=/app
WORKDIR $HOME

COPY ./package.json $HOME
COPY ./package-lock.json $HOME
COPY ./tsconfig.json $HOME
COPY ./webpack.config.js $HOME
RUN npm install

COPY ./src $HOME/src
RUN npm run build

FROM node:8-alpine

ENV HOME=/app
WORKDIR $HOME

COPY --from=0 $HOME/dist $HOME/dist
COPY --from=0 $HOME/package.json $HOME

EXPOSE 3000

CMD ["npm", "start"]