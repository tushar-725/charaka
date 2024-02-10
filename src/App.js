import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Home from './components/home/Home';
import Header from './components/header/Header';
import Blog from './components/blog/Blog';
import Vivaad from './components/programs/vivaad/Vivaad';
import Samvaad from './components/programs/samvaad/Samvaad';
import Compendium from './components/programs/compendium/Compendium';
import Research from './components/programs/compendium-sub/Research';
import Narration from './components/programs/compendium-sub/Narration';
import Team from './components/team/team';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="App">
        <Routes>  
          <Route path='/tcp' element={ <Home /> } />
          <Route path='/tcp/blog' element={ <Blog /> } />
          <Route path='/tcp/vivaad' element={ <Vivaad /> } />
          <Route path='/tcp/samvaad' element={ <Samvaad />} />
          <Route path='/tcp/compendium' element={ <Compendium />} />
          <Route path='/tcp/research-101' element={ <Research /> } />
          <Route path='/tcp/monthly-narration' element={ <Narration /> } />
          <Route path='/tcp/our-team' element={ <Team /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
