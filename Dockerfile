FROM node:latest as node
WORKDIR /TP2-RemyChagnas
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /TP2-RemyChagnas/dist/simple-app /usr/share/nginx/html