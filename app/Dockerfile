# Use uma imagem base com Node.js
FROM node:18-slim

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos do diretório atual para o contêiner (garante que backend.js e outros arquivos sejam copiados)
COPY . .

# Instale as dependências necessárias
RUN apt-get update && apt-get install -y \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

# Instale as dependências do EasyPanel (se necessário)
RUN npm install

# Exponha as portas que o EasyPanel vai usar
EXPOSE 5174

# Comando para rodar o EasyPanel
CMD ["npm", "start"]
