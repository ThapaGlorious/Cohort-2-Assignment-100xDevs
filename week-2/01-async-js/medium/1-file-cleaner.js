const fs = require('fs');

fs.readFile('fileCleaner.txt', 'utf-8', (err,data)=>{

    let trimmedData = data.replace(/\s+/g, ' ').trim();

    fs.writeFile('fileCleaner.txt', trimmedData, 'utf-8', (err)=>{

        if (err) throw err;

        console.log('Spaces has been removed: ' + trimmedData)
    })

})