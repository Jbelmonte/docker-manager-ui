module.exports = {
  html: '<%= yeoman.app %>/index.html',
  options: {
    staging: '<%= yeoman.tmp %>',
    dest: '<%= yeoman.dist %>',
    flow: {
      html: {
        steps: {
          js: ['concat', 'uglifyjs'],
          css: ['cssmin']
        },
        post: {}
      }
    }
  }
};