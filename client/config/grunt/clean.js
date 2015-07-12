module.exports = function(grunt, options){
  return {
    dist: {
      files: [{
        dot: true,
        src: ['<%= yeoman.tmp %>',
          '<%= yeoman.dist %>/{,*/}*',
          '<%= yeoman.dist %>_docs/{,*/}*',
          '!<%= yeoman.dist %>/.git{,*/}*'
        ]
      }]
    },
    server: '<%= yeoman.tmp %>'
  };
};
