import { useParams } from 'react-router-dom';
import DropDown from './components/DropDown/DropDown';

const RELATIONSHIPS = ['지인', '친구', '가족', '동료'];

const MessagePage = () => {
  const { id } = useParams();
  return (
    <div>
      <p> this is message page.</p>
      <DropDown items={RELATIONSHIPS} />
    </div>
  );
};

export default MessagePage;
