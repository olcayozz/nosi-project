# Using official Nginx
FROM nginx:alpine

# Copy files to /usr/share/nginx/html directory
COPY . /usr/share/nginx/html

# Set nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Use port 8080
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/health/index.html || exit 1

# Start command
CMD ["nginx", "-g", "daemon off;"]