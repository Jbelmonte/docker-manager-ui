module.exports = function(grunt, options){
  return {
    html: ['<%= yeoman.dist %>/{,*/}*.html'],
    css: ['<%= yeoman.dist %>/assets/css/{,*/}*.css'],
    options: {
      assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/assets/img']
    }
  };
};
