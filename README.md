<<<<<<< HEAD
# 🌟 Portfolio - Vinícius Santos

Um portfolio moderno e responsivo desenvolvido com React + TypeScript (frontend) e Flask (backend), deployado com Docker e Kubernetes.

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18** com TypeScript
- **Vite** como bundler
- **Material-UI (MUI)** para componentes
- **Emotion** para styling
- ESLint para linting

### Backend
- **Flask** (Python)
- Endpoint para download de CV

### DevOps & Infraestrutura
- **Docker** & Docker Compose
- **Kubernetes** para orquestração
- **Nginx** como reverse proxy
- **Terraform** para Infrastructure as Code (IaC)
  - Suporte para Azure, GCP e Oracle Cloud Infrastructure (OCI)

## 📁 Estrutura do Projeto

```
portfolio/
├── backend/                 # API Flask
│   ├── backend.py          # Aplicação principal
│   ├── Dockerfile          # Container do backend
│   ├── requirements.txt    # Dependências Python
│   └── static/            # Arquivos estáticos (CV)
│
├── frontend/               # Interface React
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/        # Páginas da aplicação
│   │   └── assets/       # Recursos estáticos
│   ├── Dockerfile        # Container do frontend
│   └── package.json      # Dependências Node.js
│
├── nginx/                 # Configuração do proxy reverso
├── kubernetes/           # Manifests K8s
│   ├── deployments/     # Deployments
│   └── services/        # Services
│
├── infra/               # Infrastructure as Code
│   ├── azure/          # Terraform para Azure
│   ├── gcp/            # Terraform para Google Cloud
│   └── oci/            # Terraform para Oracle Cloud
│
├── script/             # Scripts utilitários
└── docker-compose.yml # Orquestração local
```

## 🛠️ Como Executar

### Pré-requisitos
- Docker & Docker Compose
- Node.js 18+ (para desenvolvimento local)
- Python 3.8+ (para desenvolvimento local)

### Desenvolvimento Local com Docker

1. **Clone o repositório**
   ```bash
   git clone https://github.com/vsantosmt/portfolio.git
   cd portfolio
   ```

2. **Execute com Docker Compose**
   ```bash
   docker-compose up --build
   ```

3. **Acesse a aplicação**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000
   - Nginx: http://localhost:80

### Desenvolvimento Local (sem Docker)

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

#### Backend
```bash
cd backend
pip install -r requirements.txt
python backend.py
```

## 🚢 Deploy

### Docker Hub
As imagens estão disponíveis no Docker Hub:
- Backend: `vsantosmt/portfolio-backend:3.0`

### Kubernetes

1. **Deploy no cluster**
   ```bash
   kubectl apply -f kubernetes/deployments/
   kubectl apply -f kubernetes/services/
   ```

2. **Verificar o status**
   ```bash
   kubectl get pods
   kubectl get services
   ```

### Infraestrutura como Código

O projeto inclui configurações Terraform para deploy em múltiplas clouds:

#### Azure
```bash
cd infra/azure
terraform init
terraform plan
terraform apply
```

#### Google Cloud Platform
```bash
cd infra/gcp
terraform init
terraform plan
terraform apply
```

#### Oracle Cloud Infrastructure
```bash
cd infra/oci
terraform init
terraform plan
terraform apply
```

## 📋 Scripts Disponíveis

O diretório `script/` contém utilitários para manutenção:

- `cleanup_images.sh` - Limpa imagens Docker não utilizadas
- `debug_nginx.sh` - Debug do container Nginx
- `remove_container.sh` - Remove containers específicos
- `setup_ssl.sh` - Configuração de SSL

## 🌐 Funcionalidades

- **Design Responsivo** - Adaptável a diferentes dispositivos
- **Download de CV** - Endpoint dedicado para download do currículo
- **Background Animado** - Elementos visuais interativos
- **Componentes Modulares** - Arquitetura baseada em componentes
- **Pronto para Produção** - Containerizado e orquestrado

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (se necessário):

```env
# Backend
FLASK_ENV=production
FLASK_DEBUG=false

# Frontend
VITE_API_URL=http://localhost:5000
```

### SSL/HTTPS

Para configuração SSL em produção, utilize o script:
```bash
./script/setup_ssl.sh
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Amazing Feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

**Vinícius Santos**
- GitHub: [@vsantosmt](https://github.com/vsantosmt)
- LinkedIn: [Seu LinkedIn]
- Email: [Seu Email]

---

⭐ Não esqueça de dar uma estrela no projeto se ele foi útil para você!
