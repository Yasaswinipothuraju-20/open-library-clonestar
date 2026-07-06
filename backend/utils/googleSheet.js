const axios = require("axios");

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyKdUPQBen61Ie0drIMEGjPmQF5xPDwekkLdssUC8cFTWWZICuBQdUkZ2cvdk6PGc7cAg/exec";

const addUserToSheet = async (user) => {
  try {
    await axios.post(SHEET_URL, {
      userId: user._id.toString(),
      name: user.name,
      email: user.email,
      registrationTime: new Date().toLocaleString(),
    });

    console.log("✅ User added to Google Sheet");
  } catch (error) {
    console.error("❌ Google Sheet Error:", error.message);
  }
};

module.exports = addUserToSheet;