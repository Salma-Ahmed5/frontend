FROM node:18-alpine as build

WORKDIR /app

RUN npm install -g @angular/cli@16

COPY package*.json ./

RUN npm install --no-cache

COPY . .

RUN ng build --configuration production --output-path=dist

FROM nginx:stable-alpine

# Set permissions for NGINX configuration
RUN mkdir -p /tmp/nginx && chmod -R 777 /etc/nginx

# Copy the NGINX configuration file
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy the built Angular files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

# Use non-root user for running NGINX
USER nginx

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
