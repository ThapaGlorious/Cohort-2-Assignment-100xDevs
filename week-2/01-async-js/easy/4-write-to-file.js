const fs = require('fs');

fs.writeFile('write-file.txt', 'Hi this is the text that has been overwritten by the help of fs module.', 'utf-8',(err)=>{
    if(err) throw err;
    console.log('The file has been rewritten.')
})