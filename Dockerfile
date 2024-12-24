FROM node:18-alpine as build

WORKDIR /app

RUN npm install -g @angular/cli@16

COPY package*.json ./ 

RUN npm install

COPY . .

RUN ng build --configuration production --output-path=dist

FROM nginx:stable-alpine

RUN mkdir -p /tmp/nginx && chmod -R 777 /etc/nginx

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
