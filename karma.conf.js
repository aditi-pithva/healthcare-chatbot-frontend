module.exports = function (config) {
    config.set({
      browsers: ['ChromeHeadlessNoSandbox'], // Use headless Chrome with no sandbox
      customLaunchers: {
        ChromeHeadlessNoSandbox: {
          base: 'ChromeHeadless',
          flags: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--headless', '--disable-extensions']
        }
      },
      browserDisconnectTimeout: 10000, // Adjust timeout for slow CI environments
      browserNoActivityTimeout: 60000, // Adjust timeout for slow CI environments
      // Other configurations...
    });
  };