import fs from "fs/promises";
import __dirname from "./__dirname.js";

export async function showUserFilesList(path) {

  try {
    let files = await fs.readdir(path);
    console.log(files);
  } catch (error) {
    throw new Error(error);
  }

  process.stdout.write(`${path} \n`);
}