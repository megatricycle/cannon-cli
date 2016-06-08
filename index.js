#!/usr/bin/env node
var generator = require('./generator.js');

var argv = require('yargs')
    .usage('Usage: $0 --type [type] [name]')
    .choices('type', ['action', 'component'])
    .demand(['type'])
    .demand(1)
    .argv,
    type = argv.type,
    name = argv._.join(' ');

generator(type, name);