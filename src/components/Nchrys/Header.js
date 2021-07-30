import React from 'react'
import Form from './components/Nchrys/Form';
import Form2 from './components/signup/form2';


function App() {

    const addForm = (task) => {
        console.log (task) 
    }
    

    return (
        <>
            
            <Form2 onAdd ={addForm} />
      
      <Form onAdd ={addForm} />
       


        </>
    )
}

export default Header
