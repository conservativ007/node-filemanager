import { homedir } from "os";
import { showUserFilesList } from "./fs/list.js";

import fs from "fs";
import { changeSlashes, getAllPath, getPathWithCorrectSlashes, getInformationFromFile } from "./functions/functions.js";
import { cursorTo } from "readline";

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

  // navigation operations

  move(path) {
    path = getPathWithCorrectSlashes(path);
    let isThereSlash = path.includes("/");

    if (isThereSlash === false) {
      path = getAllPath(this.currentDirectory, path);
      path = changeSlashes(path);
    }

    this.moveTo(path);
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
  },

  // basic operations with files

  cut(path) {
    path = path.slice(4);
    path = changeSlashes(path);

    let isThereSlash = path.includes("/");

    if (isThereSlash === false) {
      path = getAllPath(this.currentDirectory, path);
    }
    getInformationFromFile(path);
  }
}