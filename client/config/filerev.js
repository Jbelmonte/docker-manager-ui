module.exports = {
  dist: {
    src: ['<%= yeoman.dist %>/app/{,*/}*.js',
      '<%= yeoman.dist %>/assets/css/{,*/}*.css',
      '<%= yeoman.dist %>/assets/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
      '<%= yeoman.dist %>/assets/css/fonts/*'
    ]
  }
};