import { useParams, useNavigate } from 'react-router-dom';
import FormItem from './components/FormItem';
import Input from '@/components/Input/Input';
import ProfileSelector from './components/profile/ProfileSelector';
import DropDown from './components/DropDown/DropDown';
import RichTextEditor from './components/RichText/RichTextEditor';
import Button from '@/components/Button/Button';
import { useState, useEffect, useReducer, useCallback } from 'react';
import api from '@/api/api';

const RELATIONSHIP_DATA = ['지인', '친구', '가족', '동료'];
const FONT_DATA = ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체'];

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, sender: action.payload };
    case 'SET_PROFILE':
      return { ...state, profileImageURL: action.payload };
    case 'SET_RELATION':
      return { ...state, relationship: action.payload };
    case 'SET_CONTENT':
      return { ...state, content: action.payload };
    case 'SET_FONT':
      return { ...state, font: action.payload };
    default:
      return state;
  }
}

const MessagePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const initialState = {
    team: 8,
    recipientId: id,
    sender: null,
    profileImageURL: null,
    relationship: RELATIONSHIP_DATA[0],
    content: null,
    font: FONT_DATA[0],
  };
  const [isBlank, setIsBlank] = useState(false);
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const { sender, profileImageURL, relationship, content, font } = state;
    setIsValid(!!(sender && profileImageURL && relationship && content && font));
  }, [state.sender, state.profileImageURL, state.relationship, state.content, state.font]);

  const handleProfileSelect = useCallback(
    (url) => dispatch({ type: 'SET_PROFILE', payload: url }),
    []
  );

  const handleFontSelect = useCallback(
    (value) => dispatch({ type: 'SET_FONT', payload: value }),
    []
  );

  const handleContentChange = useCallback(
    (value) => dispatch({ type: 'SET_CONTENT', payload: value }),
    []
  );

  const handleNameChange = useCallback(
    (value) => dispatch({ type: 'SET_NAME', payload: value }),
    []
  );

  const handleRelationshipSelect = useCallback(
    (value) => dispatch({ type: 'SET_RELATION', payload: value }),
    []
  );

  const handlePosting = async () => {
    try {
      const res = await api.post(id, state);
      console.log(res);
      navigate(`/post/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="min-h-screen">
      <form className="mx-auto mt-[50px] mb-[25px] flex w-[320px] flex-1 flex-col gap-[50px] md:w-[720px]">
        <FormItem title="From.">
          <Input
            placeholder="이름을 입력해주세요."
            onBlur={(err) => {
              !err.target.value ? setIsBlank(true) : setIsBlank(false);
            }}
            onChange={handleNameChange}
            error={isBlank}
            errorMessage="값을 입력해 주세요"
          />
        </FormItem>
        <FormItem title="프로필 이미지">
          <ProfileSelector onSelect={handleProfileSelect} />
        </FormItem>
        <FormItem title="상대와의 관계">
          <DropDown items={RELATIONSHIP_DATA} onSelect={handleRelationshipSelect} />
        </FormItem>
        <FormItem title="내용을 입력해 주세요">
          <RichTextEditor onChange={handleContentChange} />
        </FormItem>
        <FormItem title="폰트 선택">
          <DropDown items={FONT_DATA} onSelect={handleFontSelect} />
        </FormItem>
        <Button size="large" disabled={!isValid} onClick={handlePosting}>
          생성하기
        </Button>
      </form>
    </main>
  );
};

export default MessagePage;
