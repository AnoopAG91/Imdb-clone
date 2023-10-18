import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home/Home';
import MovieDetail from './Components/Pages/MovieDetail/MovieDetail';
import Popular from './Components/Pages/Popular/Popular';
import UpComing from './Components/Pages/Upcoming/UpComing';
import TopRated from './Components/Pages/TopRated/TopRated';

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='movie/:id' element={<MovieDetail/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/upcoming' element={<UpComing/>}/>
        <Route path='/toprated' element={<TopRated/>}/>
        <Route path='/*' element={<h1>404 page not found!</h1>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
