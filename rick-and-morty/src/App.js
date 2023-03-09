import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom'

import Home from './pages/home.page/Home';
import Header from './templates/header.template/Header';
import Footer from './templates/footer.template/Footer';
import Characters from './pages/characters.page/Characters';
import Character from './pages/character.page/Character';
import Location from './pages/location.page/Location';
import Episode from './pages/episode.page/Episode';
import Search from './pages/search.page/Search';
import NotFound from './pages/not-found.page/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/character/:id' element={<Character />} />
        <Route path='/location' element={<Location />} />
        <Route path='/episode' element={<Episode />} />
        <Route path='/search/:search' element={<Search />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
