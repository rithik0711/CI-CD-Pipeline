# CI/CD Pipeline with Jenkins and Docker on AWS EC2

This project implements a **CI/CD pipeline** to automatically build and deploy a **Node.js application** using **Jenkins** and **Docker** on an **AWS EC2** instance.

The pipeline ensures that every code update is built into a Docker image and deployed as a running container without manual intervention.

---

## Project Overview

- Jenkins is installed and configured on an AWS EC2 instance
- Source code is managed using GitHub
- Jenkins pulls the code and builds a Docker image
- The existing container is stopped and replaced with a new one
- The application is deployed and made available to users

---

## Technologies Used

- AWS EC2 (Ubuntu)
- Jenkins
- Docker
- Node.js
- GitHub

---

## Deployment Flow

