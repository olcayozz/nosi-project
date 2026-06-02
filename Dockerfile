# Use nginx:alpine as base image
FROM nginx:alpine

# Copy the HTML, CSS, and JS files to the nginx html directory
COPY index.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/

# Expose port 8080 as specified in the requirements
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/ || exit 1

# Default command (not required since nginx will run by default)
CMD ["nginx", "-g", "daemon off;"]