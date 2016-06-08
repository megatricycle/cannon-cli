# Cannon CLI
This CLI tool is used mainly for [Cannon Boilerplate](https://github.com/megatricycle/cannon-boilerplate).

## Installation
    npm install -g cannon-cli

## Usage
    cannon --type [type] [name]

## Options
    --type [required] [choices: "action", "component", "reducer"]
    
## Example
    cannon --type component sample
    
    Generated src/components/Sample/Sample.js
    Generated src/components/Sample/Sample.scss
    Generated src/components/Sample/Sample.spec.js
