import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const fetchResults = async (query) => {
    try {
        const response = await axios.post(`${API_URL}/search`, { query });
        return response.data; 
    } catch (error) {
        console.error('Error fetching results:', error);
        throw error; 
    }
};

export default  fetchResults ;
