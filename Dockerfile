FROM node:latest as node
WORKDIR /TP2-RemyChagnas
COPY . .
RUN npm install
RUN npm install -g http-server
RUN npm install -g json-server
RUN npm run build --prod

EXPOSE 3000 8080
CMD [ "json-server", "--watch", "src/app/db.json", "&", "http-server", "dist/simple-app" ]
