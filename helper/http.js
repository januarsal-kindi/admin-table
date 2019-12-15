import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:3010/',
    headers: {
        "Content-Type": "application/json",
        // anything you want to add to the headers
    }
});

export default httpClient