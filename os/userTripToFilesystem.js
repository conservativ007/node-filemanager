const writable = process.stdout;

export function userTripToFilesystem(chunkFromInput) {
  let userInput = chunkFromInput.slice(3);
  writable.write(`OOOO yah!: ${userInput}`);
}