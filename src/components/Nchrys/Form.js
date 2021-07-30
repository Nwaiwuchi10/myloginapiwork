import {Link} from 'react-router-dom'
import axios from 'axios'
import React, { useState } from 'react'
import {FaLock,  FaUserAlt} from 'react-icons/fa'



const Form = () => {

    const [data, setData]  = useState ({
        
        email:'',
        password:'',
        
    })


function Handle (e)  {
       const newdata ={...data}
       newdata[e.target.id] = e.target.value
       setData(newdata)
       console.log(newdata)
     }
    
     const submit = (e) => {
        e.preventDefault()
        axios.post('https://reqres.in/api/users',{
         email: data.email,
        password: data.password,
        })

    
        .then(res=> {
            console.log(res)
        }    )
        .catch (error => {
            console.log(console.error)
        }
            )
         
    
     
    }
    
     
    return (
        <div className='header'> 

            <div>
            <h1> Welcome </h1>
            <h2>Sign in to your account</h2>
            <br></br>
            </div>

            <div className='form' >
                <form onSubmit={(e)=> submit(e)} >
                    <div className='form1'>
                    <label>
                    < FaUserAlt className='icon' />  
                    < input 
                     type='text'  onChange={(e) =>Handle(e) }  id='email' value={data.email} />
                    </label>
                    </div>
                      <br></br>
                    <div
                    className='form2'>
                    <label>
                    <FaLock className='icon'/> 
                    <input 
                         type='password'   onChange={(e) =>Handle(e) }  id='password' value={data.password} /> 
                    </label>
                    </div>

                    <Link to='./'><p>Sign Up here</p></Link>
                   

                    <div className='form3'>
                    <label>
                    <input 
                        type='Submit' value='Sign in'/>
                        
                        
                    </label>
                    </div>
                    </form>
                    </div>
                
            


        </div>
    )
    }


// CSS in JS

export default Form
