module.exports = {
  options: {
    dest: '<%= yeoman.distDocs %>',
    html5Mode: false,
    image: '<%= yeoman.app %>/assets/img/worldline-logo.jpg',
    imageLink: 'https://tempos21.bluekiwi.net/space/in/Connected_Citizen/home',
    title: '<%= yeoman.name %>',
    bestMatch: true,
    scripts: ['angular.js', '../js/app/**/*.js']
  },
  api: {
    src: ['<%= yeoman.app %>/app/**/*.js',
      '!<%= yeoman.app %>/**/*.spec.js'
    ],
    title: 'App Documentation'
  },
  all: ['<%= yeoman.app %>/app/**/*.js']
};