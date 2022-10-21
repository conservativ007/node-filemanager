import fs from "fs/promises";

export function getPathWithCorrectSlashes(path, num = 3) {
  path = path.slice(num, path.length);
  path = path.replaceAll("\\", "/");
  path = path.trim();
  return path;
}

export function getAllPath(str1, str2) {
  let customPath = str1 + "/" + str2;
  return customPath;
}

export function changeSlashes(str) {
  return str.replaceAll("\\", "/");
}

export function moveTo(path, user) {
  fs.stat(path, (error, stats) => {
    if (error) {
      return console.log("CUSTOM ERROR");
    }

    if (stats.isDirectory() === true) {
      user.currentDirectory = path;
      user.showCurrentUserDirectory();
    }
  });
}

export async function getInformationFromFile(path) {

  path = getPathWithCorrectSlashes(path, 0);

  try {
    const text = await fs.readFile(path, "utf-8");
    process.stdout.write(`${text} \n`);
  } catch (error) {
    console.error("CUSTOM ERROR");
  }
}