FROM nginx:alpine-slim
COPY nginx /etc/nginx
RUN rm -rf /usr/share/nginx/html/*
COPY src /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
