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
          "https://starrwesternwear.com/cdn/shop/files/GoorinBrosMensTheFreedomCap-101-0384.png",
          "https://starrwesternwear.com/cdn/shop/files/GoorinBrosMensTheFreedomCap-101-0384_2.png?v=1686160366",
        ],
        ratings:4.5
      },
      {
        cap: "Flatback",
        list_price: 24.99,
        colors: ["cyan", "aquamarine"],
        image_url: [
          "https://www.goorin.com/cdn/shop/files/101-1119-MIN-F01.jpg?v=1699310941",
          "https://www.goorin.com/cdn/shop/products/101-0383-BLU-F01_1500x.jpg?v=1691615687",
        ],
        ratings:2.5
      },
      {
        cap: "Snapback",
        list_price: 21.99,
        colors: ["black", "white", "red"],
        image_url: [
          "https://i.pinimg.com/564x/9f/cf/09/9fcf0924df9611bd35ff3871e5dd4bd1.jpg",
          "https://img.freepik.com/free-psd/cap-mockup_1310-495.jpg",
          "https://i.pinimg.com/736x/5f/f0/ef/5ff0ef063be8212810cb8877181bc98a.jpg"
        ],
        ratings:3
      },
      {
        cap: "Beanie",
        list_price: 14.99,
        colors: ["blue", "purple"],
        image_url: [
          "https://image.made-in-china.com/202f0j00yPictHVWCUkm/BSCI-Two-in-One-Purple-Polar-Fleece-Winter-Neck-Scarf-Beanie-Hat.jpg",
          "https://w7.pngwing.com/pngs/641/392/png-transparent-beanie-hat-icebreaker-merino-clothing-pea-purple-hat-violet-thumbnail.png",
        ],
        ratings:4.5
      },
      {
        cap: "Visor",
        list_price: 18.99,
        colors: ["red", "yellow"],
        image_url: [
          "https://i.pinimg.com/736x/5f/f0/ef/5ff0ef063be8212810cb8877181bc98a.jpg",
          "https://freepngimg.com/convert-png/151300-cap-hat-sports-free-download-image",
        ],
        ratings:3.5
      },
      {
        cap: "Buckie",
        list_price: 16.99,
        colors: ["black", "white", "red"],
        image_url: [
          "https://i.pinimg.com/564x/9f/cf/09/9fcf0924df9611bd35ff3871e5dd4bd1.jpg",
          "https://img.freepik.com/free-psd/cap-mockup_1310-495.jpg",
          "https://i.pinimg.com/736x/5f/f0/ef/5ff0ef063be8212810cb8877181bc98a.jpg"
        ],
        ratings:3
      },
      {
        cap: "Fedora",
        list_price: 29.99,
        colors: ["black","blue"],
        image_url: [
          "https://starrwesternwear.com/cdn/shop/files/GoorinBrosMensTheFreedomCap-101-0384.png",
          "https://starrwesternwear.com/cdn/shop/files/GoorinBrosMensTheFreedomCap-101-0384_2.png?v=1686160366",
        ],
        ratings:4
      }
];

async function insertSampleData() {
  try {
    // await Caps.deleteMany();
    await Caps.insertMany(sampleData);
    console.log("cap data inserted successfully!");
  } catch (error) {
    console.error("Error inserting sample data:", error);
  } finally {
    mongoose.connection.close();
  }
}

insertSampleData();
