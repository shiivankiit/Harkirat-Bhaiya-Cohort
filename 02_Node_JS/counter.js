const fs = require ('fs'); //to read the file
const {Command} = require('commander'); //Build the cli tools.
const program = new Command()

program
.name('counter') //defines the cli app name 
.description('CLI to do file based task') //cli description.
.version('0.8.0');// cli of versions.

program.command('count') // count:the commander user name.
   .description('Count the no of lines in a file')// Provide help text for the command.
   .argument('<file>','file to count')// define required input,user must pass a file path.
   .action((file)=>{ //logic to count the lines.
    fs.readFile(file,'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }else {
            const lines = data.split(/\r?\n/).length;
            console.log(`There are ${lines} lines in ${file}`);
        }
    })
})
program.parse();    //tells commander to process the command line argument.

//if you created two files then you have to specify the path of that in a terminal when 
//you executes the code.