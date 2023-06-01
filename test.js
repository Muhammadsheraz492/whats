const { Client } = require("whatsapp-web.js");
const client = new Client();

client.on("qr", (qr) => {
  console.log("Scan the QR code with your phone.");
});

client.on("ready", () => {
  console.log("WhatsApp client is ready.");

  const recipient = "";
  const message = "Hello, there!";

  // Send the message
  client
    .sendMessage(recipient, message)
    .then((response) => {
      console.log("Message sent successfully:", response);
      client.destroy();
    })
    .catch((error) => {
      console.error("Error sending message:", error);
      client.destroy(); // Disconnect the client in case of an error
    });
});

client.initialize();
