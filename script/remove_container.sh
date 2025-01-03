#!/bin/bash

# Remover containers antigos, se houver
CONTAINERS_RUNNING=$(docker ps -aq)

if [ -n "$CONTAINERS_RUNNING" ]; then
    echo "Containers em execução encontrados. Removendo containers..."
    docker stop $CONTAINERS_RUNNING
    docker rm -f $CONTAINERS_RUNNING
else
    echo "Nenhum container em execução encontrado. Pulando remoção..."
fi
