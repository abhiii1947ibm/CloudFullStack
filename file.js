const fs = require("fs");


// ================== Read File ==================

// Synchronous
// fs.writeFileSync("./test.txt", "Hello World!");

// Asynchronous
// fs.writeFile("./test.txt", "Hello World Async", (err) => {});

// =================== Write File =================

// (utf-8 -> encoding)
// const res = fs.readFileSync("./contacts.txt", "utf-8");  // it returns something
// console.log(res);

// const res = fs.readFile("./contacts.txt", "utf-8");  //error, it doesn't return anything and here we store it in res(variable)
// console.log(res);

// fs.readFile("./contacts.txt", "utf-8", (err, res) => {  // here it works
//     if(err){
//         console.log("Error:", err);
//     } else{
//         console.log(res);
//     }
// });

// =================== Append File =================

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt", "Hey There!\n");
// fs.appendFileSync("./test.txt", `${Date.now()}Hey There!\n`);


// =================== Copy File ==================

// fs.cpSync("./test.txt", "./copy.txt");


// =================== Delete File / Unlink File ==================

// fs.unlinkSync("./copy.txt");


// =================== statistics of a file ==================

// console.log(fs.statSync("./test.txt"));
// output:
// stats {
//   dev: 2824011977,
//   mode: 33206,
//   nlink: 1,
//   uid: 0,
//   gid: 0,
//   rdev: 0,
//   blksize: 4096,
//   ino: 30962247438362716,
//   size: 117,
//   blocks: 0,
//   atimeMs: 1785265939515.2158,
//   mtimeMs: 1785265860583.322,
//   ctimeMs: 1785265939459.2842,
//   birthtimeMs: 1785265599775.1423
// }



// =================== make a directory ==================

// fs.mkdirSync("myDocs"); // create a folder named myDocs

// fs.mkdirSync("myDocss/a/b", {recursive: true}); // create a folder named myDocss and then a and then b and c under folder
