#!/bin/bash

# Obter a lista de imagens não utilizadas
unused_images=$(docker images -q -f "dangling=true")

if [ -n "$unused_images" ]; then
    echo "Existem imagens não utilizadas. Removendo..."
    # Remover as imagens não utilizadas
    docker rmi $unused_images
    echo "Imagens não utilizadas foram removidas com sucesso."
else
    echo "Nenhuma imagem não utilizada foi encontrada. Encerrando o processo."
fi
