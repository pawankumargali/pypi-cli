const CliMessage = require('./CliMessage');

class PackageInstaller {

    constructor(dependencyFilePath) {
        this.readFile = require('fs').readFileSync;
        this.exec = require('child_process').exec;
        this.chalk = require('chalk');
        this.filePath=dependencyFilePath;
        this.packages = this.setPackages();
        this.cliMessage = new CliMessage();
    }
    
    getDependencies() {
        const data = this.readFile(this.filePath, 'utf-8');
        return JSON.parse(data).Dependencies;
    }

    setPackages() {
        const packages=[];
        const dependencies = this.getDependencies();
        for(const dependency in dependencies) {
            const version = dependencies[dependency];
            packages.push(`${dependency}==${version}`);
        }
        return packages;
    }
    
    install() {
        this.cliMessage.installStart(this.packages);
        let failedPackages='';
        let failedCount = 0;
        let packagesRemaining = this.packages.length;
        this.packages.forEach( pkg =>
            this.exec(`pip install ${pkg}`, err => {

                packagesRemaining--;
                if(err) {
                    failedPackages+='Package:'+this.chalk.red(pkg) +'\n';
                    failedCount++;
                }
    
                if(packagesRemaining==0) 
                    this.cliMessage.installFinish(failedPackages, failedCount, this.packages.length);
            })
        );
    }
}

module.exports = PackageInstaller;