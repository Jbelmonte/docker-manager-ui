module.exports = {
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