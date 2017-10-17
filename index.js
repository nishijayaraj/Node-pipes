const fs = require("fs");
const inStream = fs.createReadStream("input.txt");
inStream.on("error",() => {
      console.log("Error while accessing file");
});
const outStream = fs.createWriteStream("output.txt");
inStream.pipe(outStream);
outStream.on('close',() => console.log("File has been written"));


