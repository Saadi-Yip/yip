import { uploadFile } from "./s3.setup";

function downloadSpeedTest(imageURL: string, cb: CallableFunction): Promise<number> {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        // start the timer
        const startTime = new Date().getTime();

        // use the XMLHttpRequest object to download the file
        xhr.open("GET", imageURL + "?t=" + Math.random(), true);

        xhr.onprogress = (p: any) => {
            const percentComplete = (p.loaded / p.total) * 100;
            cb(percentComplete);
        };
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // stop the timer
                const endTime = new Date().getTime();

                // calculate the duration of the download in seconds
                const duration = (endTime - startTime) / 1000;

                // calculate the size of the file in megabits
                const contentLength = xhr.getResponseHeader("Content-Length") as any;
                const fileSize = (contentLength * 8) / 1000000;

                // calculate the download speed in megabits per second
                const speedMbps = (fileSize / duration).toFixed(2);

                // display the download speed on the page
                // cb(Number(speedMbps))
                resolve(Number(speedMbps));
            }
        };
        xhr.onerror = (error) => reject(error);

        // send the request
        xhr.send();
    });
};
async function uploadSpeedTest(img: any, imgName: string, imgSize: number, cb: CallableFunction) {
    try {

        // start the timer
        const startTime = new Date().getTime();

        await uploadFile(img, imgName, cb);

        // end the timer
        const endTime = new Date().getTime();

        // calculate the duration of the download in seconds
        const duration = (endTime - startTime) / 1000;

        // calculate the download speed in megabits per second
        const speedMbps = (imgSize / duration).toFixed(2);

        // display the download speed on the page
        return Number(speedMbps);
    }
    catch (error) {
        return error;
    };
};
async function downladTests(images: Object[], cb: CallableFunction, onCompleteCB: CallableFunction) {
    const results = [];
    for (let index = 0; index < images.length; index++) {
        const img: any = images[index];

        try {
            const test = await downloadSpeedTest(img, cb);
            
            onCompleteCB(test);
            results.push(test);
        } catch (error) {
            break;
        }
    }

    const avgSpeed: number =
        results.reduce((a: number, b: number) => a + b) / results.length; // a + b + c / 3
    onCompleteCB(Number(avgSpeed.toFixed(2)))

    return avgSpeed;
};
async function uploadTests(images: any, cb: CallableFunction) {
    const results = [];
    for (let index = 0; index < images.length; index++) {
        const { img, imgSize, name } = images[index];

        try {
            const test: any = await uploadSpeedTest(img, name, imgSize, cb);
            console.log(test)
            results.push(test);
        } catch (error) {
            console.log("At test Error")
            break;
        }
    }

    const avgSpeed =
        results.reduce((a: number, b: number) => a + b) / results.length; // a + b + c / 3

    return avgSpeed;
};

export { downloadSpeedTest, downladTests, uploadTests, uploadSpeedTest }