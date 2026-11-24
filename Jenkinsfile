
pipeline {
    agent any

    tools {
        nodejs 'NodeJS-22'
    }

    stages {

        stage('Checkout') {
            steps {
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

        // Q9: Build Docker Image
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devoptoday:latest .'
            }
        }

        // Q9: Deploy Application using Docker
        stage('Deploy with Docker') {
            steps {
                sh '''
                    docker rm -f devoptoday-container || true
                    docker run -d \
                        --name devoptoday-container \
                        --restart unless-stopped \
                        -p 3000:3000 \
                        devoptoday:latest
                '''
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: Application tested, built and deployed using Docker!'
        }

        failure {
            echo 'FAILURE: Jenkins pipeline failed!'
        }
    }
}
