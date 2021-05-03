import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FontsWidgets from './components/FontsWidgets';
import FontsList from './components/FontsList';

function App() {
  return (
    <div className="App">

      <Header />

      <div className="container min-vh-100">
        <div className="row my-5">

          <FontsWidgets />

          <FontsList />

        </div>
      </div>

      <Footer />
    </div >
  );
}

export default App;
