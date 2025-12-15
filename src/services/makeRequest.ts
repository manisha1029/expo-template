import axios from "axios";

const BaseURL = process.env.API_BASE_URL || 'https://example-expo-app.com';

const api = axios.create({
    baseURL: BaseURL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export async function get<T>(url: string): Promise<T>  {
    try {
        const response = await api.get(url);
        console.log('response from get', response);
        return response?.data;

    } catch (error: unknown) {
        console.error('Error in GET request:', error);
        throw error; 
    }
}

export async function post<T>(url: string, data: object): Promise<T> {
  try {
    const response = await api.post<T>(url, data);
    console.log('response from post', response.data);

    return response?.data; 
  } catch (error) {
    console.error('Error in POST request:', error);
    throw error; 
  }
}

export async function getWithAuth<T>(url: string, token: string):Promise<T> {
    try {
        const response = await api.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('response from getWithAuth', response);
        return response?.data;

    } catch (error: unknown) {
        console.error('Error in GET with Auth request:', error);
        throw error;
    }
}

export async function postWithAuth<T>(url: string, data: object, token: string): Promise<T> {
    try {
        const response = await api.post(url, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('response from postWithAuth', response);
        return response?.data;

    } catch (error) {
        console.error('Error in POST with Auth request:', error);
        throw error;
    }
}