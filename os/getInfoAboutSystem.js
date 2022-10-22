import os from "os";

// Operating system info (prints information in console)
export function getInformationAboutSystem(path) {
  let info = path.slice(5);
  info = info.trim();

  if (info === "EOL") {
    console.log(JSON.stringify(os.EOL));
  }

  if (info === "cpus") {
    console.log(os.cpus());
  }

  if (info === "homedir") {
    console.log(os.homedir());
  }

  if (info === "username") {
    console.log(os.userInfo().username);
  }

  if (info === "architecture") {
    console.log(os.arch());
  }
}