//console.log('Hello World');

/*const name = process.argv[2];
console.log(`Hi ${name}!`);

for (let i = 2; i < process.argv.length; i ++)
{
   console.log(process.argv[i]);
}*/
const fs=require("fs");
const path=require("path")

if (process.argv.length < 3) {
  console.log("Укажите путь к директории");
  process.exit();
}
else if (process.argv.length > 3) {
  console.log("Аргументов должно быть <1");
  process.exit();
}



const standpath=process.argv[2];
const newdir_path=standpath+'/'+path.basename(standpath);

fs.access(newdir_path,(err)=>{
  if(err && err.code=='ENOENT'){
fs.mkdir(newdir_path, function (err) {
  (
    function getFiles(dir) {
      fs.readdir(dir, function (err, files) {
        for (let i in files) {
          let name = dir + '/' + files[i];
          fs.stat(name, (err, stats) => {
            if (stats.isDirectory()) {
              getFiles(name);
            } else {
              let filename = path.basename(name);
              let extname = path.extname(filename);
              fs.readFile("C:/Users/DELL/Desktop/study/cwp/cwp-01/cop.json", "utf8", function (err, data) {
                let copright = JSON.parse(data).copyright;
                if (extname == ".txt") {
                  fileContent = fs.readFile(name, "utf8", function (err, data) {
                    fs.appendFile(newdir_path + '/' + filename, copright + '\n' + data + "\n", function (err) {
                      if (err) throw err;
                    });
                    if (err) throw err;
                  })
                }
                if (err) throw err;
              })
              fs.appendFile(path.resolve(standpath + "/summary.js"), `console.log('${name.substring(standpath.length)}');`+'\n', function(err) {
                if(err) throw err; 
                }); 
            }
          });
        }
      });

    }
  )(standpath, null);
  if (err) throw err;
});
fs.watch(newdir_path, (eventType, fileNames) => {
  if (fileNames) {
      console.log(fileNames.toString()+" changed");
  }
});

}
else{
    console.log("This directory is alredy created!");
}
});