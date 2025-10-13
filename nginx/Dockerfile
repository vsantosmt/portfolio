# Usa a imagem oficial do Nginx
FROM nginx:alpine

# Remove a configuração padrão
RUN rm -f /etc/nginx/conf.d/default.conf

# Copia apenas o arquivo de configuração principal
COPY nginx.conf /etc/nginx/nginx.conf

# Cria diretórios para logs
RUN mkdir -p /var/log/nginx

# Expõe a porta 80
EXPOSE 80

# Mantém o Nginx rodando em foreground
CMD ["nginx", "-g", "daemon off;"]