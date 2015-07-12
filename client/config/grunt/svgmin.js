module.exports = function(grunt, options){
  return {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= yeoman.app %>/assets/img',
        src: '{,*/}*.svg',
        dest: '<%= yeoman.dist %>/assets/img'
      }]
    }
  };
};
