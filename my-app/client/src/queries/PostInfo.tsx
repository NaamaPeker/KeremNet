import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post/post';
import { PostData } from '../components/Post/GetPosts';

function PostInfo() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) {
      setError(true);
      return;
    }

    fetch(`http://localhost:3001/post/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then((data) => {
        if (!data || !data.comments) {
          throw new Error('Invalid post data');
        }
        setPost(data);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, [id]);

  if (error) return <p>failed.</p>;
  if (!post) return <p>Loading post...</p>;

  return (
    <div>
      <Post
        id={post.id}
        author={post.author}
        content={post.content}
        date={post.date}
        comments={post.comments.map((c: any) => ({
          author: c.author,
          text: c.text,
          timestamp: c.timestamp
        }))}
        likeCount={post.likeCount}
      />
    </div>
  );
}

export default PostInfo;
