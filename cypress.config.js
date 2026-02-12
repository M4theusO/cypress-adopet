const { defineConfig } = require("cypress");
const fs = require('fs')
const path = require("path");

module.exports = defineConfig({
  projectId: "r1buqe",
  e2e: {
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
      //timestamp: 'mmddyyyy_HHMMss',
    },
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          const hasFailures = results.tests.some(test =>
            test.attempts.some(attempt => attempt.state === 'failed')
          )
          // se NÃO teve falha → apaga vídeo
          if (!hasFailures) {
            fs.unlinkSync(results.video)
          }
        }

        // ---------- renomear json ----------
        const resultsDir = "cypress/results";
        const specName = path.basename(spec.relative, ".cy.js");

        const files = fs.readdirSync(resultsDir);

        // pega último mochawesome gerado
        const mochawesomeFile = files
          .filter(f => f.startsWith("mochawesome") && f.endsWith(".json"))
          .map(f => ({
            name: f,
            time: fs.statSync(path.join(resultsDir, f)).mtime.getTime()
          }))
          .sort((a, b) => b.time - a.time)[0];

        if (mochawesomeFile) {
          fs.renameSync(
            path.join(resultsDir, mochawesomeFile.name),
            path.join(resultsDir, `${specName}.json`)
          );
        }
      });
      
      return config;
    },
  },
});
