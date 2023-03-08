import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom'

import Home from './pages/home.page/Home';
import Header from './templates/header.template/Header';
import Footer from './templates/footer.template/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
