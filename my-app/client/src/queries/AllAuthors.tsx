import { useEffect, useState } from 'react';

function AllAuthors() {
  const [authors, setAuthors] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/authors')
      .then(res => res.json())
      .then(data => setAuthors(data))
      .catch(err => {
        console.error('Failed:', err);
        setAuthors([]);
      });
  }, []);

return (
  <div>
    <h2>All Authors</h2>
    {authors.map(author => (
      <h3 key={author}>{author}</h3>
    ))}
  </div>
);

}

export default  AllAuthors;