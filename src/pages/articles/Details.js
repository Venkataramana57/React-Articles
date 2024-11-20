import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, CircularProgress, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectArticleById } from "./../../slices/selectors";
import { remove } from '../../slices/articleSlice';

const Details = () => {
  const dispatch = useDispatch();
  const articleId = useParams().id;
  const navigate = useNavigate(); // To navigate back
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const articleObj = useSelector((state) => selectArticleById(state.articles, articleId));

  const fetchArticle = async () => {
    setTimeout(() => {
      setArticle(articleObj);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!article) {
    return (
      <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 4 }}>
        Article not found.
      </Typography>
    );
  }

  const handleBack = () => navigate('/articles');;
  const handleEdit = () => {
    navigate(`/articles/${article.id}/edit`);
  }
  const handleDelete = () => {
    dispatch(remove(article));
    handleBack();
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
      <Card sx={{ width: 800, padding: 2 }}>
        <CardMedia
          component="img"
          alt={article.title}
          height="300"
          image={'https://via.placeholder.com/800x300'}
          sx={{ borderRadius: 1 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {article.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 2 }}>
            {article.description}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Button variant="outlined" color="primary" onClick={handleBack}>
              Back
            </Button>
            <Box>
              <Button
                variant="contained"
                color="warning"
                sx={{ marginRight: 1 }}
                onClick={handleEdit}
              >
                Edit
              </Button>
              <Button variant="contained" color="error" onClick={handleDelete}>
                Delete
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Details;
