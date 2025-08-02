# Stage 1: Build the React application
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ---

# Stage 2: Serve the application using Nginx
FROM nginx:stable-alpine

# Copy the static files from the 'build' stage
# THE FIX IS ON THIS LINE: Changed '/app/build' to '/app/dist'
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the Nginx configuration TEMPLATE to a templates directory
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Expose port 80
EXPOSE 80

# When the container starts, this command will be executed.
CMD ["/bin/sh", "-c", "envsubst '$BACKEND_URL' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]