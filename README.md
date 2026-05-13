# CI/CD Pipeline Real-Time Project

## Tech Stack
- Node.js
- Express.js
- Docker
- Jenkins
- GitHub Actions
- Kubernetes

## Features
- Automated Build
- Automated Testing
- Docker Image Creation
- CI/CD Deployment Pipeline
- Kubernetes Deployment

## Project Structure
```
cicd_pipeline_project/
├── app.js
├── package.json
├── Dockerfile
├── Jenkinsfile
├── .github/workflows/deploy.yml
├── k8s/deployment.yaml
├── k8s/service.yaml
└── README.md
```

## Run Locally
```bash
npm install
npm start
```

## Docker Commands
```bash
docker build -t cicd-project .
docker run -p 3000:3000 cicd-project
```

## Jenkins Pipeline
1. Create Jenkins Pipeline Job
2. Connect GitHub Repository
3. Add Jenkinsfile Path
4. Build Automatically on Push

## GitHub Actions
Workflow automatically:
- Installs dependencies
- Runs tests
- Builds Docker image

## Kubernetes Deployment
```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```