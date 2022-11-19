import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useParams } from 'react-router-dom';

const Home = () => {
  return (
    <h1>Welcome </h1>
  )
}

const NumberOrWorld = (props) => {

  const {word, color, backGroundColor} = useParams();

  return(
    <div>

        {
            
            isNaN(word)?
            <p style={
                
                color? 
                {color: color, backgroundColor: backGroundColor}
                :null
            }>
                This is a word: {word}
            </p>
            :
            <p>This is a number: {word}</p>
        }

    </div>
)
}



function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>
        <Route element={<Home />} path="/home"/>
        <Route element={<NumberOrWorld/>} path="/:word" />
        <Route element={<NumberOrWorld />} path="/:word/:color/:backGroundColor" />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
