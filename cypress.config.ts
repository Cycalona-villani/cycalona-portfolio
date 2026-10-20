import { defineConfig } from 'cypress'

export default defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'test-results/portfolio-[hash].xml',
    toConsole: true,
  },
  e2e: {
    baseUrl: 'http://localhost:5176',
  },
})