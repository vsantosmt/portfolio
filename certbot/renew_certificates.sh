#!/bin/bash

# Tentar renovar os certificados
certbot renew --quiet

# Se a renovação for bem-sucedida, reiniciar o Nginx ou o servidor desejado
if [ $? -eq 0 ]; then
    echo "Certificados renovados com sucesso. Reiniciando o Nginx..."
    nginx -s reload
else
    echo "Falha na renovação dos certificados."
fi
