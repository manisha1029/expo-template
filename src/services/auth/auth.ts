import {type User } from '../../features/auth/authSlice';
import { post } from '../makeRequest';

export const signUpUser = async (userData: {
    name: string;
    email: string;
    password: string;
}) => {
    return await post<User>('/auth/signup', userData);
}
