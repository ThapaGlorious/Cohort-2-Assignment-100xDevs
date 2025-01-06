const fs = require('fs');

let end = 1000000000;

for (let index = 0; index < end; index++) {
 
    // -> when the end gets increased -> the asynchronus function which reads the file 
    // -> takes more time to show the result -> because of expensive for loop.
    
}

fs.readFile("read-file.txt", "utf-8", (err, data) => {
    if(err) throw err;
    console.log(data);
});