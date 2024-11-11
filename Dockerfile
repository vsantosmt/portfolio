# Usando a imagem oficial do Easy Panel como base
FROM easypanel/easypanel:latest

# Defina variáveis de ambiente, caso necessário
# ENV VERSION="1.0.0"  # Aqui você pode definir a versão ou outras variáveis de ambiente

# Instalar pacotes ou dependências adicionais (se necessário)
# RUN apt-get update && apt-get install -y <pacotes>

# Configuração de volumes, se necessário
# VOLUME ["/path/to/config", "/path/to/logs"]

# Expor as portas que o Easy Panel vai usar
EXPOSE 5173 5000

# Comando para iniciar o Easy Panel (pode ser alterado se necessário)
CMD ["node", "backend.js"]
