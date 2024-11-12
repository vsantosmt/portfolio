# Usar a imagem oficial do Node.js como base
FROM node:16

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos do backend para o container
COPY . .

# Exponha as portas necessárias
EXPOSE 5173 5000

# Comando para rodar o backend
CMD ["node", "backend.js"]
