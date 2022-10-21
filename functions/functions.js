import fs from "fs/promises";

export function getCorrectPath(path) {
  path = path.slice(3, path.length);
  path = path.replaceAll("\\", "/");
  path = path.trim();

  return path;
}

export function changeSlashes(str) {
  return str.replaceAll("\\", "/");
}

export function moveTo(path, user) {
  fs.stat(path, (error, stats) => {
    if (error) {
      return console.log("CUSTOM ERROR");
      // return console.log(this.messageError);
    }

    if (stats.isDirectory() === true) {
      user.currentDirectory = path;
      user.showCurrentUserDirectory();
      // this.currentDirectory = path;
      // this.showCurrentUserDirectory();
    }
  });
}