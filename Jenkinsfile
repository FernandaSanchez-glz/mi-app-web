pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Construyendo imagen Docker...'
                sh 'docker build -t mi-app-web:1.0 .'
            }
        }

        stage('Test') {
            steps {
                echo 'Probando la aplicación...'
                sh 'docker rm -f app-web-test || true'
                sh 'docker run -d --name app-web-test mi-app-web:1.0'
                sh 'sleep 5'
                sh 'docker exec app-web-test wget -qO- http://localhost:3000/health'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Desplegando aplicación...'
                sh 'docker rm -f app-web || true'
                sh 'docker rm -f app-web-test || true'
                sh 'docker run -d --name app-web -p 8080:3000 mi-app-web:1.0'
            }
        }
    }

    post {
        success {
            echo 'Pipeline ejecutado correctamente.'
        }
        failure {
            echo 'El Pipeline presentó un error.'
        }
    }
}
