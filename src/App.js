import './App.css';
import Navbar from './components/global_components/navbar';
import Container from './components/global_components/container';
import Footer from './components/global_components/footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <Container label='Enter Text Here' />
      </div>
      <Footer />
    </>
  );
}

export default App;
