import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom"
import News_data from './component/news_data';
import INdividual_data from './component/individual_data';


function App() {
  return (
    <div >
   
    <Routes>
        <Route path= {"/"} element = {<News_data/>} />
        <Route path= {"/single"} element = {<INdividual_data/>} />
      </Routes> 
    </div>
  );
}

export default App;
