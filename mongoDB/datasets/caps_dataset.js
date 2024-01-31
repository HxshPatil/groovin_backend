const mongoose = require("mongoose");
const Caps = require("../models/caps");

mongoose.connect(
  "mongodb+srv://harsh0patil001:L1LXkCZoX9SYSVAm@harsh.8sbkl6k.mongodb.net/BUYC"
);

const sampleData = [
    {
        cap: "Simpleton",
        list_price: 19.99,
        colors: ["black","blue"],
        image_url: [
          "https://starrwesternwear.com/cdn/shop/files/GoorinBrosMensTheFreedomCap-101-0384.png?w=300&h=200",
          "https://starrwesternwear.com/cdn/shop/files/GoorinBrosMensTheFreedomCap-101-0384_2.png?w=300&h=200",
        ],
        ratings:4.5
      },
      {
        cap: "Flatback",
        list_price: 24.99,
        colors: ["cyan", "aquamarine"],
        image_url: [
          "https://www.goorin.com/cdn/shop/files/101-1119-MIN-F01.jpg?w=300&h=200",
          "https://www.goorin.com/cdn/shop/products/101-0383-BLU-F01_1500x.jpg?w=300&h=200200",
        ],
        ratings:2.5
      },
      {
        cap: "Snapback",
        list_price: 21.99,
        colors: ["black", "yellow", "red"],
        image_url: [
          "https://www.goorin.com/cdn/shop/products/101-0385-CHA-F01_375x.jpg?w=300&h=200",
          "https://www.goorin.com/cdn/shop/products/101-0388-YEL-F01_375x.jpg?w=300&h=200",
          "https://www.goorin.com/cdn/shop/files/101-0391-WIN-F01_375x.jpg?w=300&h=200"
        ],
        ratings:3
      },
      {
        cap: "Beanie",
        list_price: 14.99,
        colors: ["blue", "green"],
        image_url: [
          "https://www.goorin.com/cdn/shop/files/101-0493-BLU-F01_375x.jpg?w=300&h=200",
          "https://www.goorin.com/cdn/shop/products/101-0392-GRE-F01_375x.jpg?w=300&h=200",
        ],
        ratings:4.5
      },
      {
        cap: "Visor",
        list_price: 18.99,
        colors: ["red", "yellow"],
        image_url: [
          "https://www.goorin.com/cdn/shop/files/101-0391-WIN-F01_375x.jpg?w=300&h=200",
          "https://www.goorin.com/cdn/shop/products/101-0388-YEL-F01_375x.jpg?w=300&h=200",
        ],
        ratings:3.5
      },
      {
        cap: "Buckie",
        list_price: 16.99,
        colors: ["red","black"],
        image_url: [
          "https://www.goorin.com/cdn/shop/products/101-0512-WIN-F01_375x.jpg?w=300&h=200",
          "https://www.goorin.com/cdn/shop/products/101-0512-CHA-F01_375x.jpg?w=300&h=200"
        ],
        ratings:3
      },
      {
        cap: "Fedora",
        list_price: 29.99,
        colors: ["black","blue"],
        image_url: [
          "https://starrwesternwear.com/cdn/shop/files/GoorinBrosMensTheFreedomCap-101-0384.png?w=300&h=200",
          "https://starrwesternwear.com/cdn/shop/files/GoorinBrosMensTheFreedomCap-101-0384_2.png?w=300&h=200",
        ],
        ratings:4
      }
];

async function insertSampleData() {
  try {
    //await Caps.deleteMany();
    await Caps.insertMany(sampleData);
    console.log("cap data inserted successfully!");
  } catch (error) {
    console.error("Error inserting sample data:", error);
  } finally {
    mongoose.connection.close();
  }
}

insertSampleData();
