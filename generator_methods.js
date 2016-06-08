var fs = require('fs-promise');

exports.component = function (name) {
    var js_path = 'src/components/' + name + '/' + name + '.js',
        scss_path = 'src/components/' + name + '/' + name + '.scss',
        test_path = 'src/components/' + name + '/' + name + '.spec.js';

    fs.mkdir('src/components/' + name)
        .then(function() {
            // write js
            fs.readFile(__dirname + '/templates/component/component.js', 'utf8')
                .then(function(body) {
                    // transform ${name}
                    return Promise.resolve(body.replace(/\${name}/g, name));
                })
                .then(function(body) {
                    // write file
                    fs.writeFile(js_path, body);
                });

            // write scss
            fs.writeFile(scss_path, '');

            // write test
            fs.readFile(__dirname + '/templates/component/component.spec.js', 'utf8')
                .then(function(body) {
                    // transform ${name}
                    return Promise.resolve(body.replace(/\${name}/g, name));
                })
                .then(function(body) {
                    // write file
                    fs.writeFile(test_path, body);
                });
        });
}

exports.action = function (name) {
    var actions_path = 'src/actions/' + name + 'Actions/' + name + 'Actions.js',
        types_path = 'src/actions/' + name + 'Actions/' + name + 'ActionTypes.js',
        test_path = 'src/actions/' + name + 'Actions/' + name + 'Actions.spec.js';

    fs.mkdir('src/actions/' + name + 'Actions')
        .then(function() {
            // write actions
            fs.readFile(__dirname + '/templates/action/actions.js', 'utf8')
                .then(function(body) {
                    // transform ${name}
                    return Promise.resolve(body.replace(/\${name}/g, name));
                })
                .then(function(body) {
                    // write file
                    fs.writeFile(actions_path, body);
                });

            // write types
            fs.readFile(__dirname + '/templates/action/actionTypes.js', 'utf8')
                .then(function(body) {
                    // write file
                    fs.writeFile(types_path, body);
                });

            // write test
            fs.readFile(__dirname + '/templates/action/actions.spec.js', 'utf8')
                .then(function(body) {
                    // transform ${name}
                    return Promise.resolve(body.replace(/\${name}/g, name));
                })
                .then(function(body) {
                    // write file
                    fs.writeFile(test_path, body);
                });
        });
}