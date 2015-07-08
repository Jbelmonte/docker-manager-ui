module.exports = {
  options: {
    configFile: 'test/protractor.conf.js',
    keepAlive: true,
    noColor: false,
    args: {}
  },
  chrome: {
    options: {
      args: {
        browser: 'chrome'
      }
    }
  },
  safari: {
    options: {
      args: {
        browser: 'safari'
      }
    }
  },
  firefox: {
    options: {
      args: {
        browser: 'firefox'
      }
    }
  }
};