const express = require("express");
const app = express();
const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const uplodFile = require("./aws");
// This method will save the binary content of the request as a file.

app.post("/binary-upload",async (req, res) => {
  try {
console.log("========================================================================================================")
console.log("========================================================================================================")
const data = await req.pipe(
  fs.createWriteStream("./uploads/image" + Date.now() + ".jpg" )
  );
  console.log(req);
    // console.log(data._writableState.onwrite({

    // }));
    // // setTimeout(async () => {
    //    var fileContent;
    //    var filename = data.path.toString().split("\\").pop().split("/").pop();
    //   //  console.log(filename);
    //    if (fs.existsSync(data.path)) {
    //      fileContent = fs.readFileSync(data.path);
    //     //  console.log(fileContent);
    //    } else {
    //      console.log("File not found");
    //   }
    //   const file = {
    //     originalname:filename, buffer:fileContent
    //   }
    //   fileUrl = await uplodFile.uploadFile(file); 
    //   // console.log(fileUrl);
    //   filesPath.push(...filesPath, fileUrl);
      
    //   console.log(filesPath);
      res.end("OK");

  } catch (error) {
    console.log(error)
  }
});
//  Upload to aws s3

app.listen(3000, () => {
  console.log("Working on port 3000");
});
