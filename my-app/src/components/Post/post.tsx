import React, { useState } from "react";
import CommentForm from "../CommentForm/commentForm";
import Comment from "../Comment/Comment";
import "./post.css";
import { CommentType } from "../CommentSection/CommentSection";
import { IconButton, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

interface PostProps {
  content: string;
  author: string;
  date: Date;
}

const Post: React.FC<PostProps> = ({ content, author, date }) => {
  const [showComments, setShowComments] = useState<boolean>(false);
  const [showCommentForm, setShowCommentForm] = useState<boolean>(false);
  const [commentList, setCommentList] = useState<CommentType[]>([]);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  const toggleComments = () => setShowComments(!showComments);
  const toggleCommentForm = () => setShowCommentForm(!showCommentForm);

  const handleAddComment = (newComment: CommentType) => {
    setCommentList(prev => [...prev, newComment]);
    setShowCommentForm(false);
    setShowComments(true);
  };

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => Math.max(prev - 1, 0));
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="post-container">
      <div>
        <span className="author">{author}</span>
      </div>

      <div className="actions">
        <span className="contect">{content}</span>
      </div>

      <div className="actions">

      <Box className="actions" display="flex" alignItems="center" gap={1}>
      <IconButton onClick={handleLike}>
      {liked ? (
      <FavoriteIcon style={{ color: "red" }} />
      ) : (
      <FavoriteBorderIcon style={{ color: "black" }} />
      )}
    </IconButton>
    <Box>
    <IconButton onClick={toggleCommentForm}>
    <ChatBubbleOutlineIcon style={{ color: "black" }} />   
    
    </IconButton>
    
   </Box>
   </Box>
        {showComments && ( <div>
            {commentList.map((currComment, index) => (
              <Comment
                key={index}
                author={currComment.author}
                text={currComment.text}
                timestamp={currComment.timestamp}
              />
            ))}
            {}
          </div>
        )}
      </div>

      {showCommentForm && <CommentForm onSubmit={handleAddComment} />}

      <div className="time">{date.toDateString()}</div>
    </div>
  );
};

export default Post;
