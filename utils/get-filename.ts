const getFileName = (file: string) => {
    return file.split("/").at(-1)?.split(".").at(0);
  };

export default getFileName;