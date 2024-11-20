import {useState, useEffect} from 'react';
import propTypes from 'prop-types';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Form = ({initForm, submitForm}) => {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		title: '',
		description: '',
		image: ''
	});
	const [backUrl, setBackUrl] = useState('/articles')

	useEffect(() => {
		if(initForm) {
			setForm(initForm);
			setBackUrl(`/articles/${initForm.id}`);
		}
	}, [initForm]);

	const handleChange = (e) => {
		setForm({...form, [e.target.name]: e.target.value});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		submitForm(form);
	}

	return(
		<Box sx={{ padding: 3, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        {initForm ? 'Update' : 'Create New'} Article
      </Typography>

			<form onSubmit={handleSubmit}>
				<TextField
					margin="normal"
					required
					fullWidth
					id="title"
					label="Title"
					name="title"
					autoFocus
					value={form.title}
					onChange={handleChange}
				/>

				<TextField
					margin="normal"
					required
					fullWidth
					id="description"
					label="Description"
					name="description"
					autoFocus
					value={form.description}
					multiline
					rows={4}
					onChange={handleChange}
				/>

				<TextField
					margin="normal"
					required
					fullWidth
					id="image"
					label="Image URL"
					name="image"
					autoFocus
					value={form.image}
					onChange={handleChange}
				/>

				<Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
					<Button variant="outlined" onClick={() => navigate(backUrl)}>
						Cancel
					</Button>
					<Button type="submit" variant="contained" color="primary">
						Submit
					</Button>
				</Box>
			</form>
		</Box>
	);
};

Form.propTypes = {
	initForm: propTypes.shape({
		title: propTypes.string.isRequired,
		description: propTypes.string.isRequired,
		image: propTypes.string
	}),
	submitForm: propTypes.func.isRequired
}

export default Form;