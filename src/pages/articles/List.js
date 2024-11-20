import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAllArticles } from "./../../slices/selectors";

const List = () => {
  const navigate = useNavigate();
  const articles = useSelector((state) => selectAllArticles(state));
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    setArticleData([...articles]);
  }, [articles]);

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
        <Typography variant="h4">Articles</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/new-article')}>
          New
        </Button>
      </Box>
      <Grid container spacing={2}>
        {articleData.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card>
              <CardMedia component="img" height="140" image={'https://via.placeholder.com/150'} alt={article.title} />
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" gutterBottom>
                    {article.title}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => navigate(`/articles/${article.id}`)}
                  >
                    Detail
                  </Button>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  {article.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default List;
