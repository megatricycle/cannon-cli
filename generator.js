var changeCase = require('change-case');
var chalk = require('chalk');

var create = require('./generator_methods');

module.exports = function(type, name) {
    switch(type) {
        case 'component':
            var converted_name = changeCase.pascalCase(name);

            createComponent(converted_name);

            break;
        case 'action':
            var converted_name = changeCase.camelCase(name);

            createAction(converted_name);

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

function createAction(name) {
    create.action(name);

    console.log(chalk.green('Generated src/actions/' + name + 'Actions/' + name + 'Actions.js'));
    console.log(chalk.green('Generated src/actions/' + name + 'Actions/' + name + 'ActionTypes.js'));
    console.log(chalk.green('Generated src/actions/' + name + 'Actions/' + name + 'Actions.spec.js'));
}