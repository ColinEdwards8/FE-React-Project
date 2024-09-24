import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import PageTwo from './pages/PageTwo';
import SpotifySearch from './pages/Spotify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/pagetwo' element={<PageTwo />}/>
        <Route path='/spotify_search' element={<SpotifySearch />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
