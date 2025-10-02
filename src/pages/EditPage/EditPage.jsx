import { useParams } from 'react-router-dom';

const EditPage = () => {
  const { id } = useParams();

  return (
    <div>
      <p> this is edit page.</p>
    </div>
  );
};

export default EditPage;
