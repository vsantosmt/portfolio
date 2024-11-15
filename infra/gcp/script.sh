nohup sudo apt-get update
nohup sudo apt-get install -y ca-certificates curl
nohup sudo install -m 0755 -d /etc/apt/keyrings
nohup sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
nohup sudo chmod a+r /etc/apt/keyrings/docker.asc

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
nohup sudo apt-get update

nohup sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh" | sudo bash

nohup sudo apt install -y gitlab-runner

nohup sudo usermod -aG docker gcp #alterar conforme usuario usado
nohup sudo usermod -aG docker gitlab-runner
