const NoPage = () => {
	return <h1> <center>PAGE NOT FOUND!!!</center> </h1>
}

export default NoPage;

/*
	redux store set up:

	src/store.js

	import {configureStore} from '@reduxjs/toolkit'
	import authReducer from './authSlice'

	export const store = configureStore({
		reducer: {
			auth: authReducer
		}
	})

	src/authSlice.js
	import {createSlice} from '@reduxjs/toolkit';

	const authSlice = createSlice({
		name: 'auth',
		initialState: {
			user: null,
			isLoggedIn: false
		},

		reducers: {
			login: (state, action) => {
				state.user = action.payload
				state.isLoggedIn = true	
			},

			logout: (state, action) => {
				state.user = null;
				state.isLoggedIn = false;
			}
		}
	})
	export const {login, logout} from authSlice.actions;
	export default authSlice.reducer;
*/ 
