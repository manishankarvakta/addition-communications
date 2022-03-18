import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/content/Content';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      
      {/* Header */}
      <Header></Header>

      {/* Main Router / Main Content */}
      <Content></Content>
      
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
