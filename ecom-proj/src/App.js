import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main'
import {Routes,Route} from 'react-router-dom';
import Cart from './components/Cart';

console.log('i am app');
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path = "/" element={<Main />}/>
        <Route  path = "/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
