import { homedir } from "os";
import fs from "fs";

import { showUserFilesList, changeSlashes, getAllPath, getPathWithCorrectSlashes, getInformationFromFile, createFile, getCorrectedString, renameFile, getAllPaths, copyFile, removeFile } from "./functions/functions.js";


export const user = {
  homeUserDirectory: homedir(),
  currentDirectory: homedir(),
  messageError: "Operation failed",

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
    path = getCorrectedString(path, 4);

    let isThereSlash = path.includes("/");

    if (isThereSlash === false) {
      path = getAllPath(this.currentDirectory, path);
    }
    getInformationFromFile(path);
  },

  add(path) {
    path = getCorrectedString(path, 4);

    let isThereSlash = path.includes("/");

    if (isThereSlash === false) {
      path = getAllPath(this.currentDirectory, path);
    }
    createFile(path);
  },

  rename(path) {
    path = getCorrectedString(path, 3);
    let correctPath = path.split(" ");
    renameFile(this.currentDirectory, correctPath[0], correctPath[1]);
  },

  copy(path, deleteOldFile = false) {
    path = getCorrectedString(path, 3);
    let correctPath = path.split(" ");
    correctPath = getAllPaths(correctPath, this.currentDirectory);

    copyFile(correctPath, deleteOldFile);
  },

  remove(path) {
    path = getCorrectedString(path, 3);
    removeFile(path);
  },
}