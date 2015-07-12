module.exports = function(grunt, options){
  return {
    app: {
      src: ['<%= yeoman.app %>/index.html'],
      ignorePath: /\.\.\//
    }
  };
};
