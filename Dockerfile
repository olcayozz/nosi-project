FROM nginx:alpine

<<<<<<< HEAD
# Copy the landing page files to the nginx html directory
COPY index.html /usr/share/nginx/html/index.html

# Expose port 8080
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/ || exit 1
=======
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

RUN echo '{"status":"ok"}' > /usr/share/nginx/html/health

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
>>>>>>> 7cc86f1d5213d4fdf12e70933b39d831b90b4202
