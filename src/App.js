import './App.css';
import Form from './components/Nchrys/Form';
import Form2 from './components/signup/form2';
import {BrowserRouter as Router, Route} from 'react-router-dom'




function App() {

  const addForm = (task) => {
    console.log (task) 
}

  return (

    <Router>
    <div className="App">
    

     <switch>

     <Route path='/' component={Form2} exact />
    <Route path='/Form' component={Form}  onAdd ={addForm} exact />
    <Route path='/Form2' component={Form2 } onAdd ={addForm} exact />

    </switch>
      

      {/* <Form2 onAdd ={addForm} />
      
      <Form onAdd ={addForm} />
       */}
    </div>

    
    </Router>
  
  );
}

export default App;
