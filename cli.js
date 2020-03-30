#!/usr/bin/env node

/* 
Usage: node cli <command> [options]

 command: install or i => installs dependencies
                          If no command is specified => displays help on command usage

 options: --path, -p => specifies path of json file containing dependencies list 
                        (default: './input/dependencies.json')
           -h => display help on command usage
*/


const args = require('yargs').argv;
const ArgHandler = require('./classes/ArgHandler');
const PackageInstaller = require('./classes/PackageInstaller');

function main() {

    const { _:commands, path, p, h } = args;
    const cmd = commands[0];

    const argHandler = new ArgHandler(cmd, path, p, h);
    const [cmdIsInstall, dependencyFilePath] = argHandler.handleCommand();

    if(cmdIsInstall) {
        const packageInstaller = new PackageInstaller(dependencyFilePath);
        packageInstaller.install();
    }
}

main();
