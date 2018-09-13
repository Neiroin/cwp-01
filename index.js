var fs = require("fs");
var dirname=process.argv[2];
var summarytext="var fs = require('fs'); var path=process.argv[1]; fs.readdir(path, function(err, items) { console.log(items); for(var i=0; i<items.length; i++) { console.log(items[i]); } });"

fs.writeFile(`${dirname}/summary.js`, summarytext, function(error){
 
                if(error) throw error; // если возникла ошибка

});