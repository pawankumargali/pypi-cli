## pypi-cli v1.0.0

CLI tool to download and install dependencies for python project from input json file<br>

### Usage: `node cli [command] --path [JSON_file_path]`

#### [command] : <br>

`install (alias i)` : 
 *  install python package dependencies mentioned in input 'dependencies.json' file <br>
* If no command is specified displays help on command usage<br>

#### Options: <br>

`--path (alias -p)`: specify [JSON_file_path] i.e., path of JSON file containing dependencies <br>

If path isn't specified, defaults to '.input/dependencies.json <br>

`-h`: displays help on command usage<br>

  
### Input
Input is a json file containing dependencies whose location can be specified using --path arg.<br>
If --path arg is not specified, the default location is set to `'./input/dependencies.json'`<br>

  

### Output in terminal
In case all dependencies are successfully installed print success<br>
If some have failed, then prints list of all failed packages, one of each in separate line.<br>

### Example
![sample-output](https://i.ibb.co/yyTP3vR/cli.png)