#!/bin/bash

echo "🔍 DEBUG NGINX - Portfolio"
echo "=========================="

echo ""
echo "📋 1. Status dos containers:"
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

echo ""
echo "📋 2. Verificando rede proxy:"
docker network ls | grep proxy

echo ""
echo "📋 3. Containers na rede proxy:"
docker network inspect proxy --format '{{range .Containers}}{{.Name}} - {{.IPv4Address}}{{"\n"}}{{end}}'

echo ""
echo "📋 4. Logs do nginx (últimas 20 linhas):"
docker logs --tail 20 webserver-nginx

echo ""
echo "📋 5. Conteúdo do diretório nginx:"
docker exec webserver-nginx ls -la /usr/share/nginx/html/

echo ""
echo "📋 6. Verificando se index.html existe:"
docker exec webserver-nginx test -f /usr/share/nginx/html/index.html && echo "✅ index.html existe" || echo "❌ index.html NÃO existe"

echo ""
echo "📋 7. Primeiras linhas do index.html:"
docker exec webserver-nginx head -10 /usr/share/nginx/html/index.html 2>/dev/null || echo "❌ Não foi possível ler index.html"

echo ""
echo "📋 8. Teste interno do nginx (localhost):"
docker exec webserver-nginx wget -q -O - http://localhost/ 2>/dev/null | head -5 || echo "❌ Falha no teste interno"

echo ""
echo "📋 9. Teste de conectividade com backend:"
docker exec webserver-nginx wget -q -O - http://webserver-backend:5000/ 2>/dev/null && echo "✅ Backend acessível" || echo "❌ Backend inacessível"

echo ""
echo "📋 10. Verificando configuração do nginx:"
docker exec webserver-nginx nginx -t && echo "✅ Configuração nginx OK" || echo "❌ Erro na configuração nginx"

echo ""
echo "📋 11. Processos rodando no container nginx:"
docker exec webserver-nginx ps aux

echo ""
echo "📋 12. Portas abertas no host:"
netstat -tulnp | grep :80

echo ""
echo "📋 13. Firewall status (se aplicável):"
sudo ufw status 2>/dev/null || echo "UFW não disponível"

echo ""
echo "=========================="
echo "🎯 Teste final - Acesso externo:"
echo "Tente acessar: http://$(curl -s ifconfig.me)/"
echo "=========================="