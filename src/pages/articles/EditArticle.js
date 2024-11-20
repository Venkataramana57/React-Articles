import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { update } from '../../slices/articleSlice';
import { selectArticleById } from "./../../slices/selectors";
import Form from './Form';

const EditArticle = () => {
	const articleId = useParams().id;
	const article = useSelector(state => selectArticleById(state.articles, articleId));
  const navigate = useNavigate();
	const dispatch = useDispatch();
  const [atricleForm, setArticleForm] = useState({
    title: '',
    description: '',
    image: ''
  });

	useEffect(() => {
		setTimeout(() => {
			setArticleForm({ ...atricleForm, ...article});
		}, 500)
	}, []);

	const handleSubmit = (atricleForm) => {
		dispatch(update({id: article.id, title: atricleForm.title, description: atricleForm.description, image: atricleForm.image}))
    navigate(`/articles/${article.id}`);
  };

  return (
		<Form initForm={atricleForm} submitForm={handleSubmit} />
  );
};

export default EditArticle;
