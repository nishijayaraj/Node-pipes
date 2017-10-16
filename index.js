const fs = require("fs");
const stream = fs.createWriteStream("demo.txt");
stream.write("First line to the file\n");
stream.write("Now it is the second line\n");
/**
 * finish event is triggered on closing the stream with end(),
 *  without which finish event would never be triggered*/


stream.on('finish',() => console.log("File has been written"));
stream.end();


