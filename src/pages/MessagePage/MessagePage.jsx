import FormItem from './components/FormItem';
import Input from '@/components/Input/Input';
import ProfileSelector from './components/profile/ProfileSelector';

const MessagePage = () => {
  return (
    <main className="min-h-screen">
      <form className="mx-auto mt-[50px] flex w-[320px] flex-1 flex-col gap-[50px] md:w-[720px]">
        <FormItem title="From.">
          <Input placeholder="이름을 입력해주세요." />
        </FormItem>
        <FormItem title="프로필 이미지">
          <ProfileSelector />
        </FormItem>
      </form>
    </main>
  );
};

export default MessagePage;
