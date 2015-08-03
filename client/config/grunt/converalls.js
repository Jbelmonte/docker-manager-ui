module.exports = function(grunt, options){
  return {
    options: {
      debug: true,
      coverageDir: 'client/test/coverage',
      dryRun: true,
      force: true,
      recursive: true
    }
  };
};
