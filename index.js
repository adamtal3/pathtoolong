#!/usr/bin/env node

var rimraf = require('rimraf');
var glob = require("glob")
var _ = require('lodash');
var chalk = require('chalk');

console.log(chalk.white('running pathtoolong'));

return glob("**/*", function (er, files) {
  var badFiles = _.filter(files, function (file) {
    return file.length > 260;
  });

  if (badFiles.length) {
    var promises = _.forEach(badFiles, function (file) {
      return rimraf(file, function () {
        console.log('Deleted ' + chalk.red(file));
      })
    });
  }
  else {
    console.log(chalk.bgGreen('All your files paths are under 260 characters.'));
  }

  Promise.all(promises).then(function () {
    console.log(chalk.bgGreen('pathtoolong finished') + chalk.white('.'));
     process.exit(0);
  });
});
