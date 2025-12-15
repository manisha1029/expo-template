import axios from "axios";

const BaseURL = process.env.API_BASE_URL || 'https://api.example.com';

const api = axios.create({
    baseURL: BaseURL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export async function get(url: string) {
    try {
        const response = await api.get(url);
        console.log('response from get', response);
        return response;

    } catch (error: unknown) {
        console.error('Error in GET request:', error);
        return error;
    }
}

export async function post(url: string, data: object) {
    try {
        const response = await api.post(url, data);
        console.log('response from post', response);
        return response;

    } catch (error) {
        console.error('Error in POST request:', error);
        return error;
    }
}

export async function getWithAuth(url: string, token: string) {
    try {
        const response = await api.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('response from getWithAuth', response);
        return response;

    } catch (error: unknown) {
        console.error('Error in GET with Auth request:', error);
        return error;
    }
}

export async function postWithAuth(url: string, data: object, token: string) {
    try {
        const response = await api.post(url, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('response from postWithAuth', response);
        return response;

    } catch (error) {
        console.error('Error in POST with Auth request:', error);
        return error;
    }
}