import { useState, useEffect } from 'react';
import axios from 'axios';

function CommentsSection() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => setComments(response.data))
      .catch((error) => setErrorMsg(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div className="loading-message">⏳ Récupération des commentaires...</div>;
  if (errorMsg) return <div className="error-message">❌ Erreur : {errorMsg}</div>;

  return (
    <div className="comments-section">
      <h2 className="section-title">💬 Section commentaires</h2>
      <ul className="comments-list">
        {comments.slice(0, 8).map((comment) => (
          <li key={comment.id} className="comment-item">
            <strong className="comment-email">{comment.email}</strong>
            <p className="comment-body">{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsSection;