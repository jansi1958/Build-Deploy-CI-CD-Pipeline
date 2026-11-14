pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Configure this Jenkins Pipeline job as "Pipeline script from SCM".
                // Jenkins then checks out the repository containing this Jenkinsfile.
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cicd-pipeline-project:${BUILD_NUMBER} .'
                sh 'docker tag cicd-pipeline-project:${BUILD_NUMBER} cicd-pipeline-project:latest'
            }
        }
    }

    post {
        always {
            echo 'CI pipeline finished. Check the stage results above.'
        }
    }
}
