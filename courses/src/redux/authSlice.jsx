import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'fetchUsers',
    async({ username, password }, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:3003/users');
            const users = response.data; // Access the users array
            
            console.log('Fetched users:', users);
            console.log('Input:', { username, password });

            const user = users.find(user => 
                (user.username === username || user.email === username) && user.password === password
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

export const addUserToServer = createAsyncThunk(
    'addUserToServer',
    async(user, rejectWithValue) => {
        try {
            const response = await axios.post('http://localhost:3003/users', user);
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data)
        }
    }

)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLogged: false,
        error: null,
        users : [],
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
        addUser(state, action){
            state.users.push(action.payload)
        }
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
            })
            .addCase(addUserToServer.fulfilled, (state, action) => {
                state.users.push(action.payload)
            })
            .addCase(addUserToServer.rejected, (state, action) => {
                state.error = action.payload
            })
    }
});

export const { login, logout, addUser } = authSlice.actions;
export default authSlice.reducer;