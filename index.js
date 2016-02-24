#!/usr/bin/env node

var rimraf = require('rimraf-promise');
var glob = require("glob")
var _ = require('lodash');
var chalk = require('chalk');
var fs = require('fs');

console.log(chalk.white('running pathtoolong'));

return glob("**/*", { realpath: true, disableGlob: true }, function (er, files) {
  var badFiles = _.filter(files, function (file) {
    var maxLength = fs.statSync(file).isDirectory() ? 248 : 260;
    return file.length > maxLength;
  });

  if (badFiles.length) {
    var promises = _.map(badFiles, function (file) {
      if (fs.existsSync(file)) {
        return rimraf(file).then(function () {
          console.log('Deleted ' + chalk.red(file));
        });
      }
      else {
        return _.noop;
      }
    });

    Promise.all(promises).then(function () {
      console.log(chalk.bgGreen('pathtoolong finished') + chalk.white('.'));
    });
  }
  else {
    console.log(chalk.bgGreen('All your files paths are under 260 characters.'));
  }
});
