# Use a imagem oficial do Certbot
FROM certbot/certbot:v2.6.0

# Instalar dependências adicionais, se necessário
RUN apt-get update && apt-get install -y \
    curl \
    cron \
    && rm -rf /var/lib/apt/lists/*

# Copiar um script para renovar os certificados
COPY renew_certificates.sh /renew_certificates.sh
RUN chmod +x /renew_certificates.sh

# Criar volumes para persistência dos certificados
VOLUME ["/etc/letsencrypt", "/var/lib/letsencrypt"]

# Configurar a renovação automática dos certificados
CMD ["sh", "-c", "trap exit TERM; while :; do /renew_certificates.sh; sleep 12h & wait $${!}; done;"]
