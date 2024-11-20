import {createSlice} from '@reduxjs/toolkit';

const articleSlice = createSlice({
	name: 'article',
	initialState: {
		articles: []
	},
	reducers: {
		add: (state, action) => {
			const totalArticles = state.articles.length;
			const article = action.payload;
			article.id = totalArticles + 1;
			state.articles.push(article);
		},
		update: (state, action) => {
			const article = state.articles.find(article => article.id == action.payload.id);
			Object.assign(article, action.payload)
		},
		remove: (state, action) => {
			const articles = state.articles.filter(article => article.id !== action.payload.id);
			state.articles = articles;
		}
	}
});

export const {add, update, remove} = articleSlice.actions;
export default articleSlice.reducer;