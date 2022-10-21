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

  if (chunkFromInput.startsWith("list")) {
    return user.showList();
  }

  if (chunkFromInput.startsWith("cd")) {
    return user.move(chunkFromInput);
  }

  if (chunkFromInput.startsWith("up")) {
    return user.up();
  }


  writable.write(chunkFromInput);
});
