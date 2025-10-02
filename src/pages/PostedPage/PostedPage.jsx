import { useParams } from 'react-router-dom';

const PostedPage = () => {
  const { id } = useParams();
  return (
    <div>
      <p> this is posted page.</p>
    </div>
  );
};

export default PostedPage;
