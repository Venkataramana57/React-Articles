import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../../slices/articleSlice';
import Form from './Form';

const NewArticle = () => {
  const navigate = useNavigate();
	const dispatch = useDispatch();
  const handleSubmit = (atricleForm) => {
		dispatch(add({title: atricleForm.title, description: atricleForm.description, image: atricleForm.image}))
    navigate('/articles');
  };

  return (
    <Form submitForm={handleSubmit} />
  );
};

export default NewArticle;
