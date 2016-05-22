'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('c generator:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ someOption: true, name:"testerlib" })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'src/testerlib.c',
      'src/testerlib.h',
      'test.c',
      'makefile',
      '.editorconfig',
    ]);
  });
});
