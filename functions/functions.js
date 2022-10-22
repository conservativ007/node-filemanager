import fs from "fs/promises";
import crypto from "crypto";

const errorMessage = "Operation failed";

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

export function getAllPaths(paths, directory) {
  return paths.reduce((acc, item) => {
    if (item.includes("/") === false) {
      item = getAllPath(directory, item);
    }
    acc.push(item);
    return acc;
  }, []);
}

export async function showUserFilesList(path) {
  try {
    let files = await fs.readdir(path);
    files.forEach(i => process.stdout.write(`${i} \n`));
  } catch (error) {
    console.error(errorMessage);
  }
}

// basi operations
export async function getInformationFromFile(path, bool = false) {

  path = getPathWithCorrectSlashes(path, 0);

  try {
    const text = await fs.readFile(path, "utf-8");
    if (bool === true) return text;
    process.stdout.write(`${text} \n`);

  } catch (error) {
    console.error(errorMessage);
  }
}

export async function createFile(path) {
  try {
    await fs.writeFile(path, "Hello!", { flag: "wx" });
  } catch (error) {
    console.error(errorMessage);
  }
}

export async function renameFile(destination, oldFile, newFile) {
  oldFile = getAllPath(destination, oldFile);
  newFile = getAllPath(destination, newFile);

  try {
    await fs.rename(oldFile, newFile);
  } catch (error) {
    console.error(errorMessage);
  }
}

export async function copyFile(paths, deleteOldFile) {
  try {
    await fs.copyFile(paths[0], paths[1]);
  } catch (error) {
    console.error(errorMessage);
  }

  if (deleteOldFile === true) {
    await fs.unlink(paths[0]);
  }
}

export async function removeFile(path) {
  try {
    await fs.unlink(path);
  } catch (error) {
    console.error(errorMessage);
  }
}

export async function getHash(path) {
  path = path.slice(5).trim();

  let data = await getInformationFromFile(path, true);
  let hash = crypto.createHash("sha256").update(data).digest("hex");

  console.log("hash from file: \n", hash);
}

