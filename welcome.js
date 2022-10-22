let userName = "";

export function welcome() {

  const argsFromUserInput = process.argv.slice(2);
  let preparedString = argsFromUserInput.join("");
  if (preparedString.startsWith("----")) {
    userName = preparedString.split("=")[1];
    process.stdout.write(`Welcome to the File Manager, ${userName}!\n`);
  }
  process.on("SIGINT", bye);
}

export function bye() {
  process.stdout.write(`Thank you for using File Manager, ${userName}!`);
  process.exit();
}