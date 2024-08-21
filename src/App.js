import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from "./Vistas/Home";
import Manga from "./Vistas/Manga";
import Anime from "./Vistas/Anime";
import VideoJuegos from "./Vistas/VideoJuegos";

function App() {
  return (
   <BrowserRouter>
    <div className="containter">
      <Routes>
      <Route path='' element= {<Home />}/>
      <Route path='/Manga' element= {<Manga />}/>
      <Route path='/Anime' element= {<Anime />}/>
      <Route path='/VideoJuegos' element= {<VideoJuegos />}/>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
