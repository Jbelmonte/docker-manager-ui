module.exports = {
  server: ['copy:styles'],
  test: ['copy:styles'],
  dist: ['copy:styles', 'imagemin', 'svgmin'],
  protractorTest: ['protractor:chrome',
    'protractor:safari',
    'protractor:firefox'
  ]
};