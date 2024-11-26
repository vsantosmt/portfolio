# Usando a imagem oficial do Certbot
FROM certbot/certbot:v2.6.0

# Diretório onde o Certbot armazenará os certificados e a configuração
VOLUME ["/etc/letsencrypt", "/var/www/certbot"]

# Comando para o Certbot gerar e renovar os certificados
ENTRYPOINT ["/bin/sh", "-c", "trap exit TERM; while :; do certbot renew; sleep 12h & wait $${!}; done;"]
