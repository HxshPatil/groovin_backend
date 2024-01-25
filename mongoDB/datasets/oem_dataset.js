const mongoose = require('mongoose');
const OEM_Specs = require('../models/oem_specs');

mongoose.connect('mongodb+srv://harsh0patil001:L1LXkCZoX9SYSVAm@harsh.8sbkl6k.mongodb.net/BUYC');

const sampleData = [
  {
    manufacturer: 'Honda',
    model: 'Civic',
    year: 2022,
    list_price: 20000.00,
    colors:'red',
    mileage: 30.5,
    power_bhp: 150,
    max_speed: 200,
    image_url: 'https://www.hdwallpapers.in/download/yellow_car_dark_background_hd_yellow-HD.jpg'
  },
  {
    manufacturer: 'Honda',
    model: 'Civic',
    year: 2022,
    list_price: 27000.00,
    colors:'white',
    mileage: 30.5,
    power_bhp: 150,
    max_speed: 200,
    image_url: 'https://www.hdwallpapers.in/download/yellow_car_dark_background_hd_yellow-HD.jpg'
  },
  {
    manufacturer: 'Honda',
    model: 'Civic',
    year: 2023,
    list_price: 28000.00,
    colors:'blue',
    mileage: 30.5,
    power_bhp: 150,
    max_speed: 200,
    image_url: 'https://www.hdwallpapers.in/download/yellow_car_dark_background_hd_yellow-HD.jpg'
  },
  {
    manufacturer: 'Honda',
    model: 'Accord',
    year: 2021,
    list_price: 28000.00,
    colors:'silver',
    mileage: 28.0,
    power_bhp: 180,
    max_speed: 210,
    image_url: 'https://www.hdwallpapers.in/download/yellow_car_dark_background_hd_yellow-HD.jpg'
  },
  {
    manufacturer: 'Honda',
    model: 'Accord',
    year: 2022,
    list_price: 30000.00,
    colors:'silver',
    mileage: 28.0,
    power_bhp: 180,
    max_speed: 210,
    image_url: 'https://www.hdwallpapers.in/download/yellow_car_dark_background_hd_yellow-HD.jpg'
  },
  {
    manufacturer: 'Honda',
    model: 'Accord',
    year: 2022,
    list_price: 28000.00,
    colors:'gray',
    mileage: 28.0,
    power_bhp: 180,
    max_speed: 210,
    image_url: 'https://www.hdwallpapers.in/download/yellow_car_dark_background_hd_yellow-HD.jpg'
  },{
    manufacturer: 'Honda',
    model: 'Accord',
    year: 2022,
    list_price: 25000.00,
    colors:'black',
    mileage: 28.0,
    power_bhp: 180,
    max_speed: 210,
    image_url: 'https://www.hdwallpapers.in/download/yellow_car_dark_background_hd_yellow-HD.jpg'
  },
  {
    manufacturer: 'Honda',
    model: 'City',
    year: 2015,
    list_price: 20000.00,
    colors: 'silver',
    mileage: 23.5,
    power_bhp: 120,
    max_speed: 180,
    image_url: 'https://www.hdwallpapers.in/download/yellow_car_dark_background_hd_yellow-HD.jpg'
  },
  {
    manufacturer: 'Honda',
    model: 'Civic',
    year: 2022,
    list_price: 25000.00,
    colors:'red',
    mileage: 30.5,
    power_bhp: 150,
    max_speed: 200,
    image_url: 'https://www.hdwallpapers.in/download/yellow_car_dark_background_hd_yellow-HD.jpg'
  },
  {
    manufacturer: 'Toyota',
    model: 'Corolla',
    year: 2021,
    list_price: 23000.00,
    colors:'silver',
    mileage: 28.5,
    power_bhp: 140,
    max_speed: 190,
    image_url: 'https://www.hdwallpapers.in/download/yellow_car_dark_background_hd_yellow-HD.jpg'   
  },{
    manufacturer: 'Toyota',
    model: 'Corolla',
    year: 2021,
    list_price: 23000.00,
    colors:'black',
    mileage: 28.5,
    power_bhp: 140,
    max_speed: 190,
    image_url: 'https://www.hdwallpapers.in/download/yellow_car_dark_background_hd_yellow-HD.jpg'
  },
  {
    manufacturer: 'Ford',
    model: 'Mustang',
    year: 2023,
    list_price: 40000.00,
    colors:'black',
    mileage: 25.0,
    power_bhp: 450,
    max_speed: 250,
    image_url: 'https://www.hdwallpapers.in/download/yellow_car_dark_background_hd_yellow-HD.jpg'
  },
  {
    manufacturer: 'Nissan',
    model: 'Altima',
    year: 2020,
    list_price: 22000.00,
    colors:'silver',
    mileage: 26.8,
    power_bhp: 170,
    max_speed: 200,
    image_url: 'https://www.hdwallpapers.in/download/yellow_car_dark_background_hd_yellow-HD.jpg'
  },
  {
    manufacturer: 'Chevrolet',
    model: 'Malibu',
    year: 2022,
    list_price: 24000.00,
    colors: 'black',
    mileage: 29.2,
    power_bhp: 160,
    max_speed: 195,
    image_url: 'https://www.hdwallpapers.in/download/yellow_car_dark_background_hd_yellow-HD.jpg'
  }
];


async function insertSampleData() {
  try {
    await OEM_Specs.insertMany(sampleData);
    console.log('OEM data inserted successfully!');
  } catch (error) {
    console.error('Error inserting sample data:', error);
  } finally {
    mongoose.connection.close();
  }
}

insertSampleData();
