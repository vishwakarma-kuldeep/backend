const aws = require("aws-sdk");
const fs  = require("fs");
require("dotenv").config();
aws.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.ACCESS_SECRET,
  region: process.env.REGION,
});

let uploadFile = async (file,baseUrl) => {
  return new Promise(function (resolve, reject) {
    let s3 = new aws.S3({ apiVersion: "2006-03-01" });

    var uploadParams = {
      ACL: "public-read",
      Bucket: process.env.AWS_BUCKET_NAME,
      Key:  `${baseUrl}/${file.originalname}`,
      Body: file.buffer,
    };
    s3.upload(uploadParams, function (err, data) {
      if (err) {
        return reject({ error: err });
      }
     
      return resolve(data.Location);
    });
  });
};

module.exports = { uploadFile };
