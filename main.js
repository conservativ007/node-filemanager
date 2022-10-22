// import { showHomeDirectory, showList } from "./os/showDirectory.js";
import { userTripToFilesystem } from "./os/userTripToFilesystem.js";
import { user } from "./user.js";
import { welcome } from "./welcome.js";

const readable = process.stdin;
const writable = process.stdout;

// we welcome to user here
welcome();

// show to user home-directory
user.showHomeUserDirectory();

readable.on("data", (chunk) => {
  let chunkFromInput = chunk.toString();

  // mavigation and working directory

  if (chunkFromInput.startsWith("ls")) {
    return user.showList();
  }

  if (chunkFromInput.startsWith("cd")) {
    return user.move(chunkFromInput);
  }

  if (chunkFromInput.startsWith("up")) {
    return user.up();
  }

  // basic operations with files

  // read file
  if (chunkFromInput.startsWith("cut")) {
    return user.cut(chunkFromInput);
  }

  // add file
  if (chunkFromInput.startsWith("add")) {
    return user.add(chunkFromInput);
  }

  // rename file
  if (chunkFromInput.startsWith("rn")) {
    return user.rename(chunkFromInput);
  }

  // copy file
  if (chunkFromInput.startsWith("cp")) {
    return user.copy(chunkFromInput);
  }

  // Move file (same as copy but initial file is deleted):
  if (chunkFromInput.startsWith("mv")) {
    return user.copy(chunkFromInput, true);
  }

  // remove file 
  if (chunkFromInput.startsWith("rm")) {
    return user.remove(chunkFromInput);
  }


  writable.write(chunkFromInput);
});
