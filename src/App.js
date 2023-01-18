import { useState } from 'react';
import './App.css';
import projects from './projects';



const Portfolio = () => {
const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
const {selected, changeSelection} = useState('All');

  const {state, changeState} = useState([]);
  
}

const Toolbar = ({filters, selected, onSelectFilter}) => {

}

const ProjectList = ({projects}) => {

}

function App() {
  return (
    <div className="App">
      <div>"Hello world"</div>
    </div>
  );
}

export default App;
