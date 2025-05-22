module.exports = {
  default: {
    require: [
      'features/stepDefinations/*.js',
      'features/support/world.js',
      'features/support/hooks.js'
    ],
    format: ['html:html-report/cucumber-report.html'],
    paths: ['features/*.feature'],
  }
};
