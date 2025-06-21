const fs = require('fs');

//fs.readFile('1.html', 'utf8', (err, data)=>{
//	console.log(err,data)
//})
//const a = fs.readFileSync('file.txt')
//console.log(a.toString())
fs.writeFile('file1.txt', "This is a data", ()=>{
	console.log("Written to the file")
});

console.log("Finished reading file")
