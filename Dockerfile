FROM nginx:alpine
COPY nginx /etc/nginx
RUN rm -rf /usr/share/nginx/html/*
COPY dist/damienrubio /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]