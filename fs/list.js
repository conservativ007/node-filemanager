import fs from "fs/promises";
import __dirname from "./__dirname.js";

export async function showUserFilesList(path) {

  try {
    let files = await fs.readdir(path);
    files.forEach(i => process.stdout.write(`${i} \n`));
  } catch (error) {
    throw new Error(error);
  }
}

