import React, { useState } from "react";
import CommentForm from "../CommentForm/commentForm";
import "./post.css";
import { CommentType } from "../CommentSection/CommentSection";
import { IconButton, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CommentSection from "../CommentSection/CommentSection";

interface PostProps {
  content: string;
  author: string;
  date: string;
  comments: CommentType[];
  likeCount: number;
}

const Post: React.FC<PostProps> = ({ content, author, date, comments, likeCount }) => {
  const [showComments, setShowComments] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [commentList, setCommentList] = useState<CommentType[]>(comments);
  const [likes, setLikes] = useState<number>(likeCount);
  const [liked, setLiked] = useState(false);

  const toggleComments = () => {
    setShowComments((prev) => !prev);
    setShowCommentForm(false);
  };

  const toggleCommentForm = () => setShowCommentForm((prev)=> !prev);

  const handleAddComment = (newComment: CommentType) => {
    setCommentList([...commentList, newComment]);
    setShowCommentForm(false);
    setShowComments(true);
  };

  const handleLike = () => {
    const newLikeCount = liked ? likes - 1 : likes + 1;
    setLikes(newLikeCount);
    setLiked(!liked);
  };

  return (
    <div className="post-container">
      <div>
        <span className="author">{author}</span>
      </div>

      <div className="actions">
        <span className="content">{content}</span>
      </div>

      <div className="actions">
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton onClick={handleLike}>
            {likes}
            {liked ? <FavoriteIcon style={{ color: "red" }} /> : <FavoriteBorderIcon />}
          </IconButton>

          <IconButton onClick={toggleCommentForm}>
            <ChatBubbleOutlineIcon />
          </IconButton>

          <Box>
            <span className="view-comments" onClick={toggleComments}>
              {showComments ? "Hide comments" : `View all ${commentList.length} comments`}
            </span>
          </Box>
        </Box>
      </div>

      {showComments && <CommentSection comments={commentList} />}
      {showCommentForm && <CommentForm onSubmit={handleAddComment} />}

      <div className="time">{date}</div>
    </div>
  );
};

export default Post;