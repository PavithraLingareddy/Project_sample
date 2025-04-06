module.exports = {
    default: {
      require: ['stepDefinitions/*.js'],  // Load step definitions
      paths: ['features/*.feature'],      // Ensure Cucumber finds feature files
      format: ['html:reports/cucumber-report.html'], // Generate reports
      parallel: 1,  // Run tests sequentially (can change for parallel execution)
      
      //publishQuiet: true,
    },
  };
  