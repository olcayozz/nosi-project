FROM nginx:alpine

# Copy the landing page files to the nginx html directory
COPY index.html /usr/share/nginx/html/index.html

# Expose port 8080
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/ || exit 1