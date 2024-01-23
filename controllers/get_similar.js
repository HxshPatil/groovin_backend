const oem = require("../mongoDB/models/oem_specs");

const getSimilarCarsCallback = async (req, res) => {
  const { query } = req.query;
  const [manufacturer='', model=''] = query.split(' ');

  try {
    // Fetch all cars from the database
    const allCars = await oem.find();

    // Calculate similarity scores for each car based on manufacturer and model
    const similarityScores = allCars.map(car => ({
      car,
      similarity: calculateSimilarity(manufacturer, car.manufacturer) +
                   calculateSimilarity(model, car.model),
    }));

    // Sort the results by similarity in descending order
    similarityScores.sort((a, b) => b.similarity - a.similarity);

    // Filter results based on a threshold (adjust as needed)
    const threshold = 0.5; // Adjust this value based on your requirements
    const similarCars = similarityScores.filter(score => score.similarity > threshold);

    res.json(similarCars.map(item => item.car));
  } catch (error) {
    console.error('Error fetching similar cars:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Helper function to calculate similarity using Levenshtein distance
function calculateSimilarity(query, field) {
  
  const maxLength = Math.max(query.length, field.length);
  const distance = levenshteinDistance(query, field);
  const similarity = 1 - distance / maxLength;

  return similarity;
}

// Helper function to calculate Levenshtein distance
function levenshteinDistance(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[a.length][b.length];
}

module.exports = { getSimilarCarsCallback };
