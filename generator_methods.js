var fs = require('fs-promise');

exports.component = function (name) {
    var js_path = 'src/components/' + name + '.js',
        scss_path = 'src/components/' + name + '.scss',
        test_path = 'src/components/' + name + '.spec.js';

    // write js
    fs.readFile('templates/component/component.js', 'utf8')
        .then(function(body) {
            // transform ${name}
            return Promise.resolve(body.replace(/\${name}/g, name));
        })
        .then(function(body) {
            // write file
            fs.writeFile(
                js_path,
                body).catch(function(err) {console.log(err)});
        })
        .catch(function(err) {
            console.log(err);
        });


    // write scss
    fs.writeFile(scss_path, '');

    // write test
    fs.readFile('templates/component/component.spec.js', 'utf8')
        .then(function(body) {
            // transform ${name}
            return Promise.resolve(body.replace(/\${name}/g, name));
        })
        .then(function(body) {
            // write file
            fs.writeFile(
                test_path,
                body).catch(function(err) {console.log(err)});
        })
        .catch(function(err) {
            console.log(err);
        });
}