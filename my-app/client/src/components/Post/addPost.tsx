import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Box, TextField, Button, Typography, Container, Paper} from "@mui/material";

function AddPost() {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [id, setId] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = { id, author, content };

    try {
      const res = await fetch(`http://localhost:3001/addPost/${newPost}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
      });

      if (!res.ok) throw new Error('Failed to add post');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper>
        <Typography>
          Add New Post
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Author"
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <TextField
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <Button type="submit">
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default AddPost;