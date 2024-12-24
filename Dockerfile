
#build 
FROM node:alpine AS build

WORKDIR /app


COPY package.json package-lock.json ./
RUN npm install


COPY . .
RUN npm run build --prod

#serve
FROM nginx:alpine


COPY --from=build /app/dist/front-endd /usr/share/nginx/html


EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]
