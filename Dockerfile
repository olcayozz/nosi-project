FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

RUN echo '{"status":"ok"}' > /usr/share/nginx/html/health

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]