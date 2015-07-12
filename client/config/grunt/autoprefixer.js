module.exports = function(grunt, options){
  return {
    options: {
      browsers: ['last 1 version']
    },
    dist: {
      files: [{
        expand: true,
        cwd: '<%= yeoman.tmp %>/assets/css/',
        src: '{,*/}*.css',
        dest: '<%= yeoman.tmp %>/assets/css/'
      }]
    }
  };
};
