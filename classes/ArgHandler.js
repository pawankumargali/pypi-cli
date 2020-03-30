const CliMessage = require('./CliMessage');

class ArgHandler {

    constructor(cmd, path, p, h) {
        this.cmd = cmd;
        this.path = path ? path : p;
        this.h = h;
        this.cliMessage = new CliMessage();
    }

    // handle command arg
    handleCommand() {

        // If command is install and help flag not used
        if((this.cmd==='install' || this.cmd==='i') && !this.h ) {
            const dependencyFilePath = this.setPathName();
            return [true, dependencyFilePath];
        }

        // If no command or help flag => display help by default
        if(!this.cmd || this.h) {
            this.cliMessage.help();
            return [false, undefined];
        }
        
        // If command is specified but not install
        this.cliMessage.argError(this.cmd);
        return [false, undefined];
    }

    // handling path option
    setPathName() {
        if(typeof this.path=='string')
            return this.path;
        else  
            return './input/dependencies.json';
    }

}

module.exports = ArgHandler;