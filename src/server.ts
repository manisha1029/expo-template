const URL = 'https://example-expo-app.com';

type SignupData = {
    name: string;
    email: string;
    password: string;
};

export type SignupResponse = {
    user: {
        id: string;
        name: string;
        email: string;
    };
    token: string;
};

async function mockAPI(data: SignupData): Promise<SignupResponse> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const { name, email, password } = data;
            if (!name || !email || !password) {
                reject(new Error('Please fill all required fields'));
            } else {
                resolve({
                    user: {
                        id: "1",
                        name: data.name,
                        email: data.email,
                    },
                    token: 'mock-jwt-token-123',
                })
            }
        }, 1500)
    })
}

export default mockAPI;