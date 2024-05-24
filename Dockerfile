FROM node:alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod


FROM nginx:alpine
COPY --from=build /app/dist/angular-modules/browser /usr/share/nginx/html
EXPOSE 80