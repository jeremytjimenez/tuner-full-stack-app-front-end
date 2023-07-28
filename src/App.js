import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Songs from './Components/Songs/Songs'
import Song from './Components/Song/Song'
import NewSong from './Components/NewSong/NewSong'
import EditSong from './Components/EditSong/EditSong'
import Nav from './Components/Nav/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/songs/:id" element={<Song />} />
          <Route path="/songs/:id/edit" element={<EditSong />} />
          <Route path="/songs/new-song" element={<NewSong />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
