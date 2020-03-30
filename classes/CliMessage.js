class CliMessage {

    constructor() {
       this.terminalSpinner = require('ora')('');
       this.chalk = require('chalk');
    }

    argError(command) {
        console.log(this.chalk.red('\nArgument Error:')+command+' command not found');
    }

    installStart(packages) {
        //  start spinner
        this.terminalSpinner.start();
        // show package list to be installed
        console.log('\nInstalling packages\n')
        console.log(this.chalk.magenta(packages)+'\n');
    }

    installFinish(failedPackages, failedCount, totalCount) {
        //If  all packages succesfully installed
        if(failedPackages.length==0)
        console.log('\n'+this.chalk.green('Success: ')+'installed all dependencies');
     
        // If some packages fail to install
        else {
            console.log('\nFailed to install '+this.chalk.red(failedCount)+' of '+this.chalk.yellow(totalCount)+'packages\n');
            console.log(failedPackages);
        }

        // stop spinner
        this.terminalSpinner.stop();
    }

    help() {
        console.log('\n'+this.chalk.yellow('Usage:\t')+ 'node cli '+this.chalk.blue('<command>')+' [--path] '
        + this.chalk.blue('<JSON_file_path>')+
        '\n\n'+this.chalk.yellow('where <command> is:')+`
        
            install or i: installs python package dependencies mentioned in 'package.json'
                          If command isn't specified, by default shows information on command usage.`+
        
        '\n\n'+this.chalk.yellow('Options:')+`
        
            --path or -p : specify  <JSON_file_path> i.e., path of JSON file containing dependencies
                           If path isn't specified, defaults to './dependencies.json'

            -h:displays information on command usage`);
    }

}

module.exports = CliMessage;