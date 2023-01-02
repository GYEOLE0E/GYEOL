import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SearchResult from './components/SearchResult';
import Home from './components/Home.js'
import SearchInput from './components/SearchInput';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchInput/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/search' element={<SearchResult/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
