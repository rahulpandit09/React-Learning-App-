import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TestUtils" aboutText="About TestUtils" />
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm  heading="Enter the Text to analyze Below"/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
