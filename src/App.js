import GlobalStyle from './components/GlobslStyle';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Work from './pages/Work';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route index element={<AboutUs />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Routes>
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
