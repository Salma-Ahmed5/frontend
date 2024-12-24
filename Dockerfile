#build 
FROM node:alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./ 
RUN npm install

COPY . .
RUN npm run build --prod

#serve
FROM nginx:alpine

# Create and set permissions for NGINX cache directories
RUN mkdir -p /var/cache/nginx/client_temp && chmod -R 777 /var/cache/nginx

# Copy built app from the build stage to NGINX directory
COPY --from=build /app/dist/front-endd /usr/share/nginx/html

EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
