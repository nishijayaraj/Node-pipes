const fs = require("fs");
const stream = fs.createWriteStream("demo.txt");
stream.write("First line to the file");
stream.write("Now it is the second line");


