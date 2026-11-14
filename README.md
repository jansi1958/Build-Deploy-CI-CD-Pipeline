# Build, Deploy & CI/CD Pipeline

A small Express.js application with automated tests and CI examples for GitHub Actions, Jenkins, Docker, and Kubernetes.

## Requirements
- Node.js 20 or newer and npm
- Docker (for the container build)
- Jenkins with Node.js and Docker available on its agent (for Jenkins)
- A Kubernetes cluster and `kubectl` (for Kubernetes)

## Run locally
```bash
npm install
npm test
npm start
```
Open `http://localhost:3000`. The health endpoint is `http://localhost:3000/health` and returns `{"status":"UP"}`.

## Run with Docker
```bash
docker build -t cicd-pipeline-project:latest .
docker run --rm -p 3000:3000 cicd-pipeline-project:latest
```
Then open `http://localhost:3000/health`.

## GitHub Actions
The workflow at `.github/workflows/ci.yml` runs on pushes and pull requests to `main`. It installs dependencies, runs the tests, and builds the Docker image. It does not publish an image or deploy to a cloud service.

## Jenkins
Create a Pipeline job configured as **Pipeline script from SCM**, select Git, enter this repository URL, and set the script path to `Jenkinsfile`. The Jenkins agent needs Node.js/npm and Docker installed and permission to run Docker. The pipeline checks out the configured repository, tests the app, and builds a local Docker image; it does not perform a Kubernetes deployment.

## Kubernetes
Build the image on a machine/cluster node accessible to your Kubernetes runtime, or load it into your local cluster. For example, with Minikube:
```bash
docker build -t cicd-pipeline-project:latest .
minikube image load cicd-pipeline-project:latest
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl rollout status deployment/cicd-app
kubectl port-forward service/cicd-service 8080:80
```
Open `http://localhost:8080/health`. For a remote cluster, push the image to a registry and update `deployment.yaml` with that registry image before applying it.
