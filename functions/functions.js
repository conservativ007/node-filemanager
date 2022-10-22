import fs from "fs/promises";

export function getPathWithCorrectSlashes(path, num = 3) {
  path = path.slice(num, path.length);
  path = path.replaceAll("\\", "/");
  path = path.trim();
  return path;
}

export function getCorrectedString(path, num = 0) {
  path = path.slice(num, path.length);
  path = path.replaceAll("\\", "/");
  path = path.trim();
  return path;
}

export function getAllPath(str1, str2) {
  let customPath = str1 + "/" + str2;
  customPath = changeSlashes(customPath);
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

export function getAllPaths(paths, directory) {
  return paths.reduce((acc, item) => {
    if (item.includes("/") === false) {
      item = getAllPath(directory, item);
    }
    acc.push(item);
    return acc;
  }, []);
}

// basi operations
export async function getInformationFromFile(path) {

  path = getPathWithCorrectSlashes(path, 0);

  try {
    const text = await fs.readFile(path, "utf-8");
    process.stdout.write(`${text} \n`);
  } catch (error) {
    console.error("CUSTOM ERROR");
  }
}

export async function createFile(path) {
  try {
    await fs.writeFile(path, "Hello!", { flag: "wx" });
  } catch (error) {
    throw new Error(error);
  }
}

export async function renameFile(destination, oldFile, newFile) {
  oldFile = getAllPath(destination, oldFile);
  newFile = getAllPath(destination, newFile);

  try {
    await fs.rename(oldFile, newFile);
  } catch (error) {
    throw new Error(error);
  }
}

export async function copyFile(paths, deleteOldFile) {
  try {
    await fs.copyFile(paths[0], paths[1]);
  } catch (error) {
    throw new Error(error);
  }

  if (deleteOldFile === true) {
    await fs.unlink(paths[0]);
  }
}

export async function removeFile(path) {
  try {
    await fs.unlink(path);
  } catch (error) {
    throw new Error(error);
  }
}

