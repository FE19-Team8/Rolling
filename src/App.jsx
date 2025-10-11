import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './globals.css';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import PostedPage from './pages/PostedPage/PostedPage';
import PostingPage from './pages/PostingPage/PostingPage';
import MessagePage from './pages/MessagePage/MessagePage';
import EditPage from './pages/EditPage/EditPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/post" element={<PostingPage />} />
        <Route path="/post/:id" element={<PostedPage />} />
        <Route path="/post/:id/edit" element={<EditPage />} />
        <Route path="/post/:id/message" element={<MessagePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
