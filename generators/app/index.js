'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the glorious ' + chalk.red('c-library') + ' generator!'
    ));

    var prompts = [{
            name: 'name',
            message: 'enter a name.'
        }];

    this.prompt(prompts, function (props) {
      this.props = props;
      this.props.name = props.name.trim();
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('src/main.c'),
        this.destinationPath('src/' + this.props.name + '.c'),
        {name:this.props.name}
      );
      this.fs.copyTpl(
        this.templatePath('src/main.h'),
        this.destinationPath('src/' + this.props.name + '.h'),
        {name:this.props.name}
      );
      this.fs.copyTpl(
      this.templatePath('test.c'),
      this.destinationPath('test.c'),
      {name:this.props.name}
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copyTpl(
        this.templatePath('makefile'),
        this.destinationPath('makefile'),
        {name:this.props.name}
      );
      this.fs.copy(
        this.templatePath('bin'),
        this.destinationPath('bin')
      );
    }
  },

  install: function () {
  }
});
