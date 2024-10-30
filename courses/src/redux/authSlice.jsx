import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'fetchUsers',
    async({ username, password, email }, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:3000/users');
            const users = response.data; // Access the users array
            console.log(response.data.users);
            
            console.log('Fetched users:', users);
            console.log('Input:', { username, email, password });

            const user = users.find(user => 
                (user.username === username || user.email === email) && user.password === password
            );
            console.log('Matched user:', user);
            if (user) {
                return user;
            } else {
                return rejectWithValue('Invalid username/email or password');
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLogged: false,
        error: null,
    },
    reducers: {
        login(state, action) {
            state.user = action.payload;
            state.isLogged = true;
            state.error = null;
        },
        logout(state) {
            state.user = null;
            state.isLogged = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLogged = true;
                state.error = null;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.error = action.payload;
            });
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;