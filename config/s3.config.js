import AWS from "aws-sdk"

const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME
const accessKeyId = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY
const secretAccessKey = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
const region = process.env.NEXT_PUBLIC_AWS_BUCKET_REGION
const s3 = new AWS.S3({
    accessKeyId,
    secretAccessKey,
    region: region
});


const uploadFile = (file, name,cb) => {
    const params = {
        Bucket: bucketName,
        Key: name,
        Body: file,
        ContentType: 'image/webp'
    };
    return new Promise((resolve, reject) => {
        s3.upload(params, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
            .on("httpUploadProgress", (p) => {
                const progress = (p.loaded / p.total) * 100;
                cb(progress); 
                
            });
    });
};

const getImage = (key) => {
    const params = {
        Bucket: bucketName,
        Key: key
    };
    return new Promise((resolve, reject) => {
        s3.getObject(params, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data.Body);
            }
        });
    });
};

const deleteImage = (key) => {
    const params = {
        Bucket: bucketName,
        Key: key
    };
    return new Promise((resolve, reject) => {
        s3.deleteObject(params, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve('Image deleted successfully.');
            }
        });
    });
};

export { uploadFile, deleteImage, getImage }
