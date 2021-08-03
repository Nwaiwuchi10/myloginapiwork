import './App.css';
import Form from './components/Nchrys/Form';
import Form2 from './components/signup/form2';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Forgetpass from './components/Nchrys/Forgetpass';
import Homepage from './components/Nchrys/Homepage';




function App() {

  const addForm = (task) => {
    console.log (task) 
}

  return (

    <Router>
    <div className="App">
    

     <switch>

     <Route path='/' component={Form2} exact />
    <Route path='/Form' component={Form}   exact />
    <Route path='/Form2' component={Form2 } exact />
    <Route path='/Forgetpass' component={Forgetpass } exact />
    <Route path='/Homepage' component={Homepage } exact />
   

    </switch>
      
        
      {/* <Form2 onAdd ={addForm} />
      
      <Form onAdd ={addForm} />
       */}
    </div>

    
    </Router>
  
  );
}

export default App;
