import './globals.css';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import {
  Popover,
  PopoverTrigger,
  EmojiContent,
  ShareContent,
} from './pages/PostedPage/components/Popover';

function App() {
  return (
    <>
      <MainPage />
      <div className="ml-60 border">
        <Popover>
          <PopoverTrigger type="emoji" />
          <EmojiContent />
        </Popover>
      </div>
      <div className="ml-60 border mt-60">
        <Popover>
          <PopoverTrigger type="share" />
          <ShareContent />
        </Popover>
      </div>
    </>
  );
}

export default App;
