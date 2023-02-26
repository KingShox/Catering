import logo from './logo.svg';
import './App.css';
import Header from './Reusables/Header';
import Home from './Pages/Home/components/Home';

function App() {
  return (
    <div className="flex-col">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
