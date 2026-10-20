pipeline {
  agent any

  environment {
    PATH = "/usr/local/bin:/opt/homebrew/bin:${env.PATH}"
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Build portfolio') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Run Cypress tests') {
      steps {
        sh 'rm -f test-results/portfolio-*.xml'
        sh 'npm run test:e2e'
      }
      post {
        always {
          junit 'test-results/*.xml'
        }
      }
    }
  }
}