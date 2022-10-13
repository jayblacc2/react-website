import GlobalStyle from './components/GlobslStyle';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutUs />
      <GlobalStyle />
    </div>
  );
}

export default App;
