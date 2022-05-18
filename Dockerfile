FROM node:latest as node
WORKDIR /TP2-RemyChagnas
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /TP2-RemyChagnas/dist/simple-app /usr/share/nginx/html
RUN ls
RUN pwd
COPY --from=node /TP2-RemyChagnas/src/app/db.json .
RUN ls
RUN pwd
RUN json-server --watch ./db.json &