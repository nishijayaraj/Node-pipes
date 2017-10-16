const fs = require("fs");
const stream = fs.createWriteStream("demo.txt");
stream.write("First line to the file\n");
stream.write("Now it is the second line\n");


