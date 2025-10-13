#!/bin/bash

# Lista de containers do projeto
PROJECT_CONTAINERS=(
    "webserver-frontend"
    "webserver-frontend-temp"
    "webserver-backend"
    "webserver-nginx"
)

echo "🧹 Removendo containers do portfolio..."

for container in "${PROJECT_CONTAINERS[@]}"; do
    if docker ps -a --format '{{.Names}}' | grep -q "^${container}$"; then
        echo "  ⏹️  Parando $container..."
        docker stop "$container" 2>/dev/null || true
        echo "  🗑️  Removendo $container..."
        docker rm -f "$container" 2>/dev/null || true
    fi
done

echo "✅ Limpeza concluída!"
