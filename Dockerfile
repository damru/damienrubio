### STAGE 1: Build ###
FROM node:10-alpine as node-builder

COPY package.json package-lock.json ./
RUN npm install && mkdir /ng-app && mv ./node_modules /ng-app
WORKDIR /ng-app
COPY . .
RUN npm run ng build -- --prod --output-path=dist

### STAGE 2: Setup ###
FROM nginx:alpine
COPY nginx/ /etc/nginx/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=node-builder /ng-app/dist /usr/share/nginx/html/damienrubio
CMD ["nginx", "-g", "daemon off;"]
