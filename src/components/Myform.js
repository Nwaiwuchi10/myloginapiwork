import {Link} from 'react-router-dom'
import axios from 'axios'
import React, { useState } from 'react'
import {FaLock,  FaUserAlt} from 'react-icons/fa'



const Form = ({onAdd}) => {

    const [email, setEmail]  = useState ('')
    const [password, setPassword] = useState ('')


    

    
    const onSubmit = (e) => {
        e.preventDefault()
        axios.post('http://reqres.in/api/login', useState)
    .then(res=> {
        console.log(res)
    }    )
    .catch (error => {
        console.log(console.error)
    }
        )
     
    if (!email)  {
        alert ('please add a task')
    }
 
    onAdd ({email, password})
 
    setEmail ('')
    setPassword ('')
    
     }
 
     
     
    return (
        <div className='header'> 

            <div>
            <h1> Welcome </h1>
            <h2>Sign in to your account</h2>
            <br></br>
            </div>

            <div className='form' >
                <form onSubmit={onSubmit}>
                    <div className='form1'>
                    <label>
                    < FaUserAlt className='icon' />  
                    < input 
                     type='text' value={email} onChange={(e) =>setEmail(e.target.value) } />
                    </label>
                    </div>
                      <br></br>
                    <div
                    className='form2'>
                    <label>
                    <FaLock className='icon'/> 
                    <input 
                         type='password'  value={password} onChange={(e) =>setPassword(e.target.value)  }  /> 
                    </label>
                    </div>

                    <Link to='./'><p>Forgot password?</p></Link>
                    <a href='./Form2'><p>Sign Up here</p></a>

                    <div className='form3'>
                    <label>
                    <a href='./Trans'><input 
                        type='Submit' value='Sign in'/></a>
                        
                        
                    </label>
                    </div>
                    </form>
                    </div>
                
            


        </div>
    )
    }


// CSS in JS

export default Form
