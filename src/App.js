import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TestUtils" aboutText="About TestUtils" />
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm  heading="Enter the Text to analyze Below"/>
      </div>
    </>
  );
}

export default App;
