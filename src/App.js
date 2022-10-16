import GlobalStyle from './components/GlobslStyle';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Work from './pages/Work';
import MovieDetail from './pages/MovieDetail';
import {Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<MovieDetail />} />
        </Routes>
      </AnimatePresence>
      ß
    </div>
  );
}

export default App;
