# Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
# Use npm ci se você tiver package-lock.json (mais reprodutível)
RUN npm ci
COPY . .
RUN npm run build

# Nginx para servir SPA
FROM nginx:alpine
# remove default site
RUN rm -f /etc/nginx/conf.d/default.conf
# copia os arquivos gerados
COPY --from=build /app/dist /usr/share/nginx/html
# cria uma config SPA com fallback para index.html
RUN printf 'server {\n\
  listen 80;\n\
  server_name _;\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
  location / {\n\
    try_files $uri /index.html;\n\
  }\n\
  location ~* \\.(?:css|js|woff2?|ttf|eot|otf|svg|png|jpe?g|gif)$ {\n\
    access_log off;\n\
    expires 7d;\n\
    add_header Cache-Control "public";\n\
    try_files $uri =404;\n\
  }\n\
}\n' > /etc/nginx/conf.d/app.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
