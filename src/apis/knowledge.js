// src/apis/knowledge.js
import axios from 'axios';

export const getFact = async () => {
    try {
        const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
        return response.data.text;//not .fact is.text 哈哈哈哈哈哈哈哈哈哈哈
    } catch (error) {
        console.error('Error fetching fact:', error);
        return 'Failed to load fact. Please try again.';
    }
};
