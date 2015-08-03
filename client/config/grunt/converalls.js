module.exports = function(grunt, options){
  return {
    options: {
      debug: true,
      coverageDir: 'coverage',
      dryRun: true,
      force: true,
      recursive: true
    }
  };
};
