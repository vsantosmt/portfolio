#!/bin/bash

# Diretório do webroot usado pelo Certbot
WEBROOT="/var/www/certbot"

# Tentar renovar os certificados
certbot renew --webroot -w $WEBROOT --quiet

# Verificar se a renovação foi bem-sucedida
if [ $? -eq 0 ]; then
    echo "$(date): Certificados renovados com sucesso." >> /var/log/certbot.log

    # Verificar se o container do Nginx está em execução
    if [ "$(docker ps -q -f name=webserver-nginx)" ]; then
        echo "$(date): Reiniciando o Nginx..." >> /var/log/certbot.log
        docker exec webserver-nginx nginx -s reload
    else
        echo "$(date): O container do Nginx não está em execução. Verifique!" >> /var/log/certbot.log
    fi
else
    echo "$(date): Falha na renovação dos certificados. Verifique os logs do Certbot!" >> /var/log/certbot.log
fi
