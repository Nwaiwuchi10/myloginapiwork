import axios from 'axios'
import React, { useState } from 'react'
import {FaAddressCard, FaLock,  FaUserAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'



const Form = ({onAdd}) => {

    const [name, setName]  = useState ('')
    const [date, setDate] = useState ('')
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [confirmpassword, setConfirmpassword] = useState ('')


    
    const onSubmit = (e) => {
        e.preventDefault()
        axios.post('http://jsonplaceholder.typicode.com/posts', useState)
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
 
    onAdd ({ name, date,email, password})
 
    setName ('')
    setDate ('')
    setEmail ('')
    setPassword ('')
    setConfirmpassword ('')

    
     }
 
     
     
    return (
        <div className='header1'> 

            <div>
            <h1> Welcome </h1>
            <h2>Sign up if you dont have an account</h2>
            <br></br>
            </div>

            <div className='forms' >
                <form onSubmit={onSubmit}>
                    <div className='forms1'>
                    <label>
                    < FaUserAlt className='icon' />  
                    < input 
                     type='text'  placeholder='Name' value={name} onChange={(e) =>setName(e.target.value) } />
                    </label>
                    </div>
                      <br></br>
                    <div
                    className='forms2'>
                    <label>
                    <input 
                         type='date' placeholder='Date of birth' value={date} onChange={(e) =>setDate(e.target.value)  }  /> 
                    </label>
                    </div>
                    <div
                    className='forms3'>
                    <label>
                    <FaAddressCard className='icon'/> 
                    <input 
                         type='text' placeholder='email' value={email} onChange={(e) =>setEmail(e.target.value)  }  /> 
                    </label>
                    </div>
                    <div
                    className='forms4'>
                    <label>
                    <FaLock className='icon'/> 
                    <input 
                         type='password' placeholder='Password' value={password} onChange={(e) =>setPassword(e.target.value)  }  /> 
                    </label>
                    </div>
                    <div
                    className='forms5'>
                    <label>
                    <FaLock className='icon'/> 
                    <input 
                         type='password' placeholder='Confirm password' value={confirmpassword} onChange={(e) =>setConfirmpassword(e.target.value)  }  /> 
                    </label>
                    </div>

                    <Link to='./Form'><p>Sign In here</p></Link>

                    <div className='forms6'>
                    <label>
                    <input 
                        type='Submit' value='Sign Up'/>
                        
                        
                    </label>
                    </div>
                    </form>
                    </div>
                
            


        </div>
    )
    }


// CSS in JS

export default Form
