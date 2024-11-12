# Use uma imagem base que já tenha o EasyPanel (ou node, caso esteja criando do zero)
FROM node:18-slim

# Defina o diretório de trabalho
WORKDIR /app

# Instale as dependências do EasyPanel (ou qualquer outro sistema necessário)
RUN apt-get update && apt-get install -y \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

# Baixe o EasyPanel do repositório GitHub ou de um repositório oficial, se necessário
# RUN git clone https://github.com/easycorp/easy-panel.git .

# Instale as dependências do EasyPanel (geralmente Node.js, ou outros pacotes)
RUN npm install

# Exponha as portas que o EasyPanel irá usar
EXPOSE 5173 5000

# Comando para rodar o EasyPanel
CMD ["npm", "start"]
