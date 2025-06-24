import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import "../CommentForm/CommentForm.css";

type CommentFormProps = {
  onSubmit: (comment: { author: string; text: string; timestamp: Date }) => void;
};

const CommentForm = ({ onSubmit }: CommentFormProps) => {
  const [author, setAuthor] = useState("");
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (author.trim() && commentText.trim()) {
      onSubmit({ author, text: commentText, timestamp: new Date() });
      setAuthor("");
      setCommentText("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      gap={2}
      px={2}
      pb={2}
    >
      <TextField
        label="Your Name"
        variant="outlined"
        size="small"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        fullWidth
      />
      <TextField
        label="Write your comment..."
        variant="outlined"
        multiline
        rows={3}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add Comment
      </Button>
    </Box>
  );
};

export default CommentForm;
