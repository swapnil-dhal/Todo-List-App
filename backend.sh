#!/bin/bash
set -e  # Stop script if any command fails

# Install dependencies for Docker repo
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg lsb-release

# Add Docker’s official GPG key
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add Docker repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update

# Install Docker Engine, CLI, and plugins
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Enable and start Docker
sudo systemctl enable docker
sudo systemctl start docker

# Optionally pull backend Docker image (or use docker compose up, depending on your workflow)
sudo docker pull dhalswapnil/backend

# Extract DB archive (assumes db-init.tar.xz is in the current directory)
tar -xf db-init.tar.xz

sudo docker compose up --build -d
# Your further backend setup steps (e.g., running containers) go here

echo "Backend setup complete."

