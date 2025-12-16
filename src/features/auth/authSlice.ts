import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { signUpUser } from '../../services/auth/auth';
import mockSignUpAPI, { type SignupResponse } from '../../server';

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface InitialStateProps {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  user: SignupResponse['user'] | null;
  token: string | null;
}

const initialState: InitialStateProps = {
  status: 'idle',
  error: null,
  user: null,
  token: null,
};

// Async thunk
export const signup = createAsyncThunk<SignupResponse, User>('signup', async (userData:User) => {
  // const response = await signUpUser(userData); 
  const response = await mockSignUpAPI(userData) // Replace with actual API.
  console.log('reponse from mock sign up API', response)
  return response; 
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  }
});

// export const selectLoggedInUser = (state: any) => state.auth.user;
// export const selectLoggedInUserError = (state: any) => state.auth.error;
// export const selectLoggedInUserStatus = (state: any) => state.auth.status;
export default authSlice.reducer;

