import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		users: [],
		currentUser: null,
		isLoggedin: false,
	},
	reducers: {
		login: (state, action) => {
			const payload = action.payload;
			const user = state.users.find(user => user.email == payload.email && user.password == payload.password);
			if(user) {
				state.currentUser = user;
				state.isLoggedin = true;
				console.log('User Loggedin successfully!')
			} else {
				state.currentUser = null;
				state.isLoggedin = false;
				console.log('Invalid credentials')
			}
		},
		signup: (state, action) => {
			state.users.push(action.payload);
		},
		logout: (state, action) => {
			state.currentUser = null;
			state.isLoggedin = false;
		}
	}
});

export const {login, signup, logout} = authSlice.actions;
export default authSlice.reducer;
