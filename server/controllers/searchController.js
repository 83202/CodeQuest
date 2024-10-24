const axios = require('axios');
const History = require('../models/historyModel');

const fetchStackOverflow = async (query) => {
  const response = await axios.get(`https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${query}&site=stackoverflow`);
  return response.data.items;
};

const fetchReddit = async (query) => {
  const response = await axios.get(`https://www.reddit.com/search.json?q=${query}`);
  return response.data.data.children;
};

const searchResults = async (req, res) => {
  const query = req.query.q;
  const source = req.query.source;  
  try {
    let stackResults = [];
    let redditResults = [];

    if (source === 'all' || source === 'stackoverflow') {
      stackResults = await fetchStackOverflow(query);
    }
    if (source === 'all' || source === 'reddit') {
      redditResults = await fetchReddit(query);
    }

    const results = [...stackResults, ...redditResults];

    const historyEntry = new History({
      query,
      results,
    });

    await historyEntry.save(); 

    res.json({ stackResults, redditResults });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};



module.exports = { searchResults };
