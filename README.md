# 📝 2-Tier Todo List App on AWS

A simple **Todo List App** with full **CRUD functionalities**, deployed on AWS using **Terraform** and **Docker**.  
This project demonstrates a **2-tier architecture** setup with separate frontend and backend services, containerized with Docker, and pushed to Docker Hub.

---

## 🚀 Features
- ✅ Add, update, delete, and view todos (CRUD operations)
- 🎨 **Frontend:** React + Vite (served via **Nginx** as reverse proxy to backend)
- ⚙️ **Backend:** Node.js (Express, CORS, dotenv)
- 🗄️ **Database:** MySQL
- 🐳 **Containerized:** Docker images hosted on Docker Hub  
  - [`dhalswapnil/frontend:latest`](https://hub.docker.com/r/dhalswapnil/frontend)  
  - [`dhalswapnil/backend:latest`](https://hub.docker.com/r/dhalswapnil/backend)

---

## 🏗️ Architecture

- **Frontend (React + Nginx)**  
  Runs inside a Docker container on an **EC2 instance in a public subnet**.  
  Handles static UI and proxies API requests to backend (solving CORS issues).

- **Backend (Express + MySQL)**  
  Runs inside a Docker container on an **EC2 instance in a private subnet**.  
  Handles all API requests and database operations.

