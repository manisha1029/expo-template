import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signUpUser } from '../../services/auth/auth';

interface User {
  name: string;
  email: string;
  password: string;
}

interface InitialStateProps {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  user: User | null;
  token: string | null;
}

const initialState: InitialStateProps = {
  status: 'idle',
  error: null,
  user: null,
  token: null,
};

// Async thunk
export const signupAsync = createAsyncThunk('auth/signup', async (userData:User) => {
  const response = await signUpUser(userData)
  return response; 
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signupAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  }
});

export const selectLoggedInUser = (state: any) => state.auth.user;
export const selectLoggedInUserError = (state: any) => state.auth.error;
export const selectLoggedInUserStatus = (state: any) => state.auth.status;

export default authSlice.reducer;
