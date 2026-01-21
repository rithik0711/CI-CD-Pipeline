pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-ci-cd-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop node-app || true
                docker rm node-app || true
                docker run -d -p 3000:8080 --name node-app node-ci-cd-app
                '''
            }
        }
    }
}
