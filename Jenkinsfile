
pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    tools {
        nodejs 'NodeJS-22'
    }

    stages {

        stage('Checkout') {
            steps {
                deleteDir()
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
                sh 'docker build -t devoptoday:latest .'
            }
        }

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
