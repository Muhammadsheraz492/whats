const fs = require("fs/promises");

const data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

async function saveDataToFile(data) {
  try {
    await fs.appendFile("filename.txt", data + "\n");
    console.log("Data has been appended to the file.");
  } catch (err) {
    console.error(err);
  }
}

async function generateCombinations() {
  for (const e1 of data) {
    for (const e2 of data) {
      for (const e3 of data) {
        for (const e4 of data) {
          for (const e5 of data) {
            for (const e6 of data) {
              for (const e7 of data) {
                await saveDataToFile(e1 + e2 + e3 + e4 + e5 + e6 + e7);
              }
            }
          }
        }
      }
    }
  }
}

generateCombinations();
