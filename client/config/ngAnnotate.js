module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= yeoman.tmp %>/concat/app',
      src: ['*.js', '!oldieshim.js'],
      dest: '<%= yeoman.tmp %>/concat/app'
    }]
  }
};