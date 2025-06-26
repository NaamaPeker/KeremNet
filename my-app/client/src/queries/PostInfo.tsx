import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post/post';

function PostInfo() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:3001/post/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then((data) => setPost(data))
      .catch((err) => {
        alert(err);
      });
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
    <Post
        key={post.id}
        author={post.author}
        content={post.content}
        date={post.date}
        comments={post.comments}
        likeCount={post.likeCount}/>
  </div>)
}
export default  PostInfo;