# Use uma imagem base que já tenha o Node.js
FROM node:18-slim

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json para o contêiner
COPY ./package.json /app/

# Instale as dependências necessárias
RUN apt-get update && apt-get install -y \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

# Instale as dependências do Node.js (EasyPanel ou outras)
RUN npm install

# Se necessário, baixe o EasyPanel ou outros arquivos
# RUN git clone https://github.com/easycorp/easy-panel.git .  # Se for usar EasyPanel diretamente do GitHub

# Exponha as portas necessárias (ajuste conforme seu caso)
EXPOSE 5173 5000

# Comando para rodar o EasyPanel (ajuste conforme seu ambiente)
CMD npm start
