#!/bin/bash

echo "🔒 Configurando SSL/TLS para vgsenterprise.lat"

# Instala certbot
sudo apt update
sudo apt install -y certbot

# Para os containers temporariamente
docker stop webserver-nginx

# Gera certificado (certbot standalone)
sudo certbot certonly --standalone -d vgsenterprise.lat -d www.vgsenterprise.lat --non-interactive --agree-tos -m santos.viniciusmt@gmail.com

# Copia certificados para um local acessível pelo Docker
sudo mkdir -p /etc/nginx/ssl
sudo cp /etc/letsencrypt/live/vgsenterprise.lat/fullchain.pem /etc/nginx/ssl/
sudo cp /etc/letsencrypt/live/vgsenterprise.lat/privkey.pem /etc/nginx/ssl/
sudo chmod 644 /etc/nginx/ssl/*.pem

# Reinicia o nginx
docker start webserver-nginx

echo "✅ SSL configurado com sucesso!"
echo "Acesse: https://vgsenterprise.lat/"
