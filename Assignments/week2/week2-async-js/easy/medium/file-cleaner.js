// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// hello     world    my    name   is       raman
// After the program runs, the output should be

// hello world my name is raman

//First build up your logic:-->for reading the file we use fs.readfile at the time of reading 
//we need to remove space...after that we have to write to the same file.

const fs = require("fs");

fs.readFile("A.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error occurred", err);
    return;
  }

  console.log("Data reading:", data);

 
  const cleandata = data.replace(/\s+/g, " ").trim();

  
  fs.writeFile("A.txt", cleandata, "utf-8", (err) => {
    if (err) {
      console.log("Error while writing the file:", err);
      return;
    }

    console.log("✅ File cleaned successfully");
  });
});

//when the file get read the content is stored inside data..after that you can apply any method to it.
