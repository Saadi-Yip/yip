import getFileName from "./get-filename";

function getImageFile(
  imgSrc: string
): Promise<{ imgSize: number; img: string | ArrayBuffer; name: string }> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(imgSrc);
      const data = await response.blob();

      const imgName = getFileName(response.url) ?? "";
      const imgSize = Number((data.size / (1024 * 1024)).toFixed(2)); // in Mbs

      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result) {
          resolve({ imgSize, img: reader.result, name: imgName });
        }
      };

      reader.readAsDataURL(data);
    } catch (error) {
      reject(error);
    }
  });
};

export default getImageFile;