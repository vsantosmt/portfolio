#!/bin/bash
#docker
sudo apt update -y && sudo apt upgrade -y
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update -y
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo usermod -aG docker ubuntu
sudo systemctl enable docker
sudo systemctl start docker

sudo docker network create proxy

#gitlab runner
sudo apt update -y && sudo apt upgrade -y
sudo apt install -y curl ca-certificates
curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh | sudo bash
sudo apt install -y gitlab-runner
sudo systemctl enable gitlab-runner
sudo systemctl start gitlab-runner

#k3s
sudo apt update -y && sudo apt upgrade -y
sudo apt install -y curl
curl -sfL https://get.k3s.io | sh -
sudo mkdir -p ~/.kube
sudo cp /etc/rancher/k3s/k3s.yaml ~/.kube/config
sudo chown $USER:$USER ~/.kube/config

