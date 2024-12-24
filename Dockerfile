# Build stage
FROM node:alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json and install dependencies
COPY package.json package-lock.json ./ 
RUN npm install

# Copy the rest of the application and build
COPY . .
RUN npm run build --prod

# Serve stage
FROM nginx:alpine

# Create and set permissions for NGINX cache directories
RUN mkdir -p /var/cache/nginx/client_temp \
    && chown -R nginx:nginx /var/cache/nginx \
    && chmod 755 /var/cache/nginx

# Copy the built application from the build stage to NGINX html directory
COPY --from=build /app/dist/front-endd /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX as the non-root user (nginx)
USER nginx

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
