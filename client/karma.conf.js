export default function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    files: [
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,
    logLevel: config.LOG_INFO,

    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity
  })
}
