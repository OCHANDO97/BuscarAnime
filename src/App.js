import './app.module.css';
import Home from './page/Home';
import './index.module.css';
import { Routes, Route } from "react-router-dom";
import PageAnime from './page/PageAnime';
import Shingeki from './page/Shingeki';
import TopAnime from './page/TopAnime';

function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Home />  } />
       <Route path="/anime/:id" element={<PageAnime />  } />
       <Route path="/shingeki" element={<Shingeki />  } />
       <Route path="/topAnime" element={<TopAnime /> } />

       
       
     </Routes>
    </>
  );
}

export default App;
