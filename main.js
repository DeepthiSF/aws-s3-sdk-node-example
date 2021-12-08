// Import required AWS SDK clients and commands for Node.js.
import { PutObjectCommand, CreateBucketCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./client.js";

// Set the parameters
const params = {
  Bucket: "deepthi-aws-s3-sdk-node-bucket", // The name of the bucket. For example, 'sample_bucket_101'.
  Key: "sample_sdk_text1.txt", // The name of the object. For example, 'sample_upload.txt'.
  Body: "This is a sample text file loaded using SDK-node.", // The content of the object. For example, 'Hello world!".
  ACL:'public-read' // Make this file publicly accessible
};

const run = () => {
  s3Client
    .send(new CreateBucketCommand({ Bucket: params.Bucket }))
    .then((data) => {
      console.log("Successfully created a bucket called ", data.Location);
    })
    .then(() => {
      return s3Client.send(new PutObjectCommand(params));
    })
    .then(() => {
      console.log(
        "Successfully created " +
          params.Key +
          " and uploaded it to " +
          params.Bucket +
          "/" +
          params.Key
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

run();
