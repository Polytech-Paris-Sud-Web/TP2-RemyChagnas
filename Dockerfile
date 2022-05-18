FROM node:latest as node
WORKDIR /TP2-RemyChagnas
COPY . .
RUN npm install
RUN npm install -g http-server
RUN npm run build --prod

EXPOSE 8080
CMD http-server dist/simple-app
