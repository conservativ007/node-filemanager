import { homedir } from "os";
import { showUserFilesList } from "./fs/list.js";

import fs from "fs";
import { changeSlashes, getCorrectPath } from "./functions/functions.js";

// console.log(stats);
// console.log("Path is file:", stats.isFile());
// console.log("Path is directory:", stats.isDirectory());

export const user = {
  homeUserDirectory: homedir(),
  currentDirectory: homedir(),
  messageError: "Invalid input",

  showHomeUserDirectory() {
    process.stdout.write(`You are currently in ${homedir()} \n`);
  },

  showCurrentUserDirectory() {
    process.stdout.write(`You are currently in ${this.currentDirectory} \n`);
  },

  showList() {
    showUserFilesList(this.currentDirectory);
  },

  move(path) {
    console.log("move to path");
    path = getCorrectPath(path);

    let isThereSlash = path.includes("/");

    if (isThereSlash === false) {
      let customPath = this.currentDirectory + "/" + path;
      customPath = changeSlashes(customPath)
      console.log("customPath: ", customPath);

      this.moveTo(customPath);
    }
  },

  up() {

    if (changeSlashes(this.homeUserDirectory) === changeSlashes(this.currentDirectory))
      return this.showCurrentUserDirectory();

    let testString = this.currentDirectory;
    let indexOfSlash = testString.lastIndexOf("/");
    testString = testString.slice(0, indexOfSlash);

    this.currentDirectory = testString;
    this.showCurrentUserDirectory();
  },

  moveTo(path) {
    fs.stat(path, (error, stats) => {
      if (error) {
        return console.log(this.messageError);
      }

      if (stats.isDirectory() === true) {
        this.currentDirectory = path;
        this.showCurrentUserDirectory();
      }
    });
  }
}