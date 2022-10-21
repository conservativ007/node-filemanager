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
  if (chunkFromInput.startsWith("cut")) {
    return user.cut(chunkFromInput);
  }


  writable.write(chunkFromInput);
});
