FROM nginx:alpine

RUN rm /usr/share/nginx/html/index.html

COPY index.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/

RUN echo '#!/bin/sh\necho "OK"' > /health.sh && chmod +x /health.sh

RUN sed -i '/location \/ {/,/}/c\
    location / {\
        try_files $uri $uri/ /index.html;\
    }\
    location /health {\
        access_log off;\
        return 200 "OK";\
        add_header Content-Type text/plain;\
    }' /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]