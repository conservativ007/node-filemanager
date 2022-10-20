import { homedir } from "os";
import { showUserFilesList } from "./fs/list.js";

export const user = {
  homeUserDirectory: homedir(),
  currentDirectory: homedir(),

  showHomeUserDirectory() {
    process.stdout.write(`You are currently in ${homedir()} \n`);
  },

  showList() {
    showUserFilesList(this.currentDirectory);
  }
}