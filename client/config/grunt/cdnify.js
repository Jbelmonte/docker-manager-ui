module.exports = function(grunt, options){
  return {
    dist: {
      html: ['<%= yeoman.dist %>/*.html'],
      css: true
    }
  };
};
