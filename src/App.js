import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Blog from './components/pages/Blog/Blog';
import Service from './components/pages/Service/Service';
import Contact from './components/pages/Contact/Contact';
import NotFound from './components/pages/NotFound/NotFound';
import BlogDetails from './components/pages/Blog/BlogDetails';

function App() {
  return (
    <div className="App">
      
      {/* Header */}
      <Header></Header>

      <div className="content">
        <div className="container-fluid">
          {/* Main Router / Main Content */}
          <Routes>
            <Route>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Service />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </div>
      
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
