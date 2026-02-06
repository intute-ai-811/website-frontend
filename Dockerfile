# Stage 1: Build the React app with Vite
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

# Stage 2: Serve the build with Nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: custom Nginx config (uncomment if you use it)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
