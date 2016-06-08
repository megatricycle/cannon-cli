var changeCase = require('change-case');
var chalk = require('chalk');

var create = require('./generator_methods');

module.exports = function(type, name) {
    switch(type) {
        case 'component':
            var converted_name = changeCase.pascalCase(name);

            createComponent(converted_name);

            break;
        default:
    }
}

function createComponent(name) {
    create.component(name);

    console.log(chalk.green('Generated src/components/' + name + '/' + name + '.js'));
    console.log(chalk.green('Generated src/components/' + name + '/' + name + '.scss'));
    console.log(chalk.green('Generated src/components/' + name + '/' + name + '.spec.js'));
}