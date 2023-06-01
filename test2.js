const venom = require("venom-bot");
const fs = require("fs/promises");
const data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

async function saveDataToFile(data) {
  try {
    await fs.appendFile("sended.txt", data + "\n");
    console.log("Data has been appended to the file.");
  } catch (err) {
    console.error(err);
  }
}
async function Error(data) {
  try {
    await fs.appendFile("Error.txt", data + "\n");
    console.log("Data has been appended to the file.");
  } catch (err) {
    console.error(err);
  }
}

venom
  .create()
  .then((client) => {
    console.log("WhatsApp client is ready.");

    // Define the recipient and the message content
    const recipient = "phone_number"; // Replace with the recipient's phone number
    const message =
      "https://youtu.be/iow9wbVucyA\nاسلام علیکم\nعرض ہے اس ویڈیو کو یوٹیوب پر ایک بار ضرور دیکھیں اور ایک لائک اور ایک شیئر اور ایک کمنٹ ضرور فرما کر مجھے واپس ضرور بتا دیں ۔۔۔۔🌹 شکریہ";

    // const message ="https://youtu.be/iow9wbVucyA اسلام علیکم  عرض ہے اس ویڈیو کو یوٹیوب پر ایک بار ضرور دیکھیں اور ایک لائک اور ایک شیئر اور ایک کمنٹ ضرور فرما کر مجھے واپس ضرور بتا دیں ۔۔۔۔🌹 شکریہ"; // Replace with the message content
    // client.onMessage(async (message) => {
    //   console.log(message.from);
    // });
    // Send the message
    async function generateCombinations() {
      for (const e1 of data) {
        for (const e2 of data) {
          for (const e3 of data) {
            for (const e4 of data) {
              for (const e5 of data) {
                for (const e6 of data) {
                  for (const e7 of data) {
                    //   await saveDataToFile(e1 + e2 + e3 + e4 + e5 + e6 + e7);
                    await client
                      .sendText(
                        `92341${e1 + e2 + e3 + e4 + e5 + e6 + e7}@c.us`,
                        message
                      )
                      .then((result) => {
                        if (result.erro) {
                          Error(`92341${e1 + e2 + e3 + e4 + e5 + e6 + e7}`);
                        } else {
                          saveDataToFile(
                            `92341${e1 + e2 + e3 + e4 + e5 + e6 + e7}`
                          );
                        }
                        console.log("Message sent successfully:");
                        // client.close(); // Disconnect the client after sending the message
                      })
                      .catch((error) => {
                        console.error("Error sending message:", error.erro);
                        Error(`92341${e1 + e2 + e3 + e4 + e5 + e6 + e7}`);

                        // client.close(); // Disconnect the client in case of an error
                      });
                  }
                }
              }
            }
          }
        }
      }
    }
    generateCombinations();
  })
  .catch((error) => {
    console.error("Error creating WhatsApp client:", error);
  });
