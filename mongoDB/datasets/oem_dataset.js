const mongoose = require("mongoose");
const OEM_Specs = require("../models/oem_specs");

mongoose.connect(
  "mongodb+srv://harsh0patil001:L1LXkCZoX9SYSVAm@harsh.8sbkl6k.mongodb.net/BUYC"
);

const sampleData = [
  {
    manufacturer: "Honda",
    model: "Civic",
    year: 2022,
    list_price: 20000,
    colors: "red",
    mileage: 30.5,
    power_bhp: 150,
    max_speed: 200,
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Honda_Civic_Type-R_%28MSP17%29.jpg",
    manufacturer_model: "Honda Civic",
  },
  {
    manufacturer: "Honda",
    model: "Accord",
    year: 2021,
    list_price: 28000,
    colors: "silver",
    mileage: 28,
    power_bhp: 180,
    max_speed: 210,
    image_url:
      "https://f.hubspotusercontent00.net/hubfs/2684054/car-review-blog/review_337312_1.jpg",
    manufacturer_model: "Honda Accord",
  },
  {
    manufacturer: "Honda",
    model: "Accord",
    year: 2022,
    list_price: 25000,
    colors: "black",
    mileage: 28,
    power_bhp: 180,
    max_speed: 210,
    image_url:
      "https://i.pinimg.com/originals/34/37/5c/34375cc797193b92d48f52e37b8433ae.jpg",
    manufacturer_model: "Honda Accord",
  },
  {
    manufacturer: "Honda",
    model: "City",
    year: 2015,
    list_price: 20000,
    colors: "silver",
    mileage: 23.5,
    power_bhp: 120,
    max_speed: 180,
    image_url:
      "https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/2023-honda-city-facelift-01.jpg",
    manufacturer_model: "Honda City",
  },
  {
    manufacturer: "Toyota",
    model: "Corolla",
    year: 2021,
    list_price: 23000,
    colors: "silver",
    mileage: 28.5,
    power_bhp: 140,
    max_speed: 190,
    image_url: "https://i.ytimg.com/vi/KiFniePTlqo/maxresdefault.jpg",
    manufacturer_model: "Toyota Corolla",
  },
  {
    manufacturer: "Toyota",
    model: "Corolla",
    year: 2021,
    list_price: 23000,
    colors: "black",
    mileage: 28.5,
    power_bhp: 140,
    max_speed: 190,
    image_url:
      "https://www.team-bhp.com/forum/attachments/test-drives-initial-ownership-reports/247489d1261124131-sparkling-new-black-toyota-corolla-altis-dsc02385.jpg",
    manufacturer_model: "Toyota Corolla",
  },
  {
    manufacturer: "Ford",
    model: "Mustang",
    year: 2023,
    list_price: 40000,
    colors: "black",
    mileage: 25,
    power_bhp: 450,
    max_speed: 250,
    image_url:
      "https://www.modifiedx.com/wp-content/uploads/2016/10/Ford-Mustan-GT-modified-India-970x475.jpg",
    manufacturer_model: "Ford Mustang",
  },
  {
    manufacturer: "Nissan",
    model: "Altima",
    year: 2020,
    list_price: 22000,
    colors: "silver",
    mileage: 26.8,
    power_bhp: 170,
    max_speed: 200,
    image_url:
      "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/media/300858/2010-nissan-altima-sedan-review-car-and-driver-photo-300908-s-original.jpg",
    manufacturer_model: "Nissan Altima",
  },
  {
    manufacturer: "Chevrolet",
    model: "Malibu",
    year: 2022,
    list_price: 24000,
    colors: "black",
    mileage: 29.2,
    power_bhp: 160,
    max_speed: 195,
    image_url:
      "https://alamedapost.com/wp-content/uploads/2023/05/2023-Malibu-Cover-watermark.jpg",
    manufacturer_model: "Chevrolet Malibu",
  },
  {
    manufacturer: "Ford",
    model: "Fusion",
    year: 2022,
    list_price: 26000,
    colors: "black",
    mileage: 28.5,
    power_bhp: 160,
    max_speed: 200,
    image_url:
      "https://s.aolcdn.com/images/dims?client=fh7w6q744eiognjk&signature=4ec36f1d02fb8a9b8e241afa616c401a2d98d1b5&image_uri=http%3A%2F%2Fs.aolcdn.com%2Fcommerce%2Fblogcdn%2Fwww.autoblog.com%2Fmedia%2F2009%2F08%2F2010fordfusionhybrid_review000.jpg",
    manufacturer_model: "Ford Fusion",
  },
  {
    manufacturer: "Chevrolet",
    model: "Impala",
    year: 2021,
    list_price: 28000,
    colors: "blue",
    mileage: 27.8,
    power_bhp: 180,
    max_speed: 210,
    image_url: "https://i.ytimg.com/vi/SvlMgByI6HE/maxresdefault.jpg",
    manufacturer_model: "Chevrolet Impala",
  },
  {
    manufacturer: "Ford",
    model: "Escape",
    year: 2022,
    list_price: 30000,
    colors: "white",
    mileage: 25.8,
    power_bhp: 180,
    max_speed: 200,
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/2021_Ford_Escape_Hybrid_SEL_AWD_in_Oxford_White%2C_front_left.jpg/1200px-2021_Ford_Escape_Hybrid_SEL_AWD_in_Oxford_White%2C_front_left.jpg",
    manufacturer_model: "Ford Escape",
  },
  {
    manufacturer: "Nissan",
    model: "Maxima",
    year: 2023,
    list_price: 32000,
    colors: "red",
    mileage: 26.5,
    power_bhp: 200,
    max_speed: 220,
    image_url:
      "https://pictures.dealer.com/a/autonationdrive/1917/cd69420f6c305dc9e3f1f7e19ddba802x.jpg",
    manufacturer_model: "Nissan Maxima",
  },
  {
    manufacturer: "Ford",
    model: "Escape",
    year: 2022,
    list_price: 30000,
    colors: "blue",
    mileage: 25.8,
    power_bhp: 180,
    max_speed: 200,
    image_url: "https://enginedesigns.net/media/01/ford_escape_2016_front.jpg",
    manufacturer_model: "Ford Escape",
  },
];

async function insertSampleData() {
  try {
    await OEM_Specs.deleteMany({});
    await OEM_Specs.insertMany(sampleData);
    console.log("OEM data inserted successfully!");
  } catch (error) {
    console.error("Error inserting sample data:", error);
  } finally {
    mongoose.connection.close();
  }
}

insertSampleData();
