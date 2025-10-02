import { useParams } from 'react-router-dom';

const MessagePage = () => {
  const { id } = useParams();
  return (
    <div>
      <p> this is message page.</p>
    </div>
  );
};

export default MessagePage;
