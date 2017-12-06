FROM node:8-alpine

ENV HOME=/app
WORKDIR $HOME

COPY ./package.json $HOME
COPY ./package-lock.json $HOME
RUN npm install

COPY ./tsconfig.json $HOME
COPY ./tslint.json $HOME
COPY ./.angular-cli.json $HOME

COPY ./src/ $HOME/src/
RUN npm run build -- --prod --aot

FROM nginx:alpine
ENV HOME=/app
COPY --from=0 $HOME/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
