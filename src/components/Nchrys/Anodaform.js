import axios from 'axios'
import React, { useState } from 'react'
import {FaAddressCard, FaLock,  FaUserAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'



const Form = () => {

    
    const [data, setData]  = useState ({
        name:'',
        date:'',
        email:'',
        password:'',
        confirmpassword:'',
    })
   
   

     function Handle (e)  {
       const newdata ={...data}
       newdata[e.target.id] = e.target.value
       setData(newdata)
       console.log(newdata)
     }

     

    
    const submit = (e) => {
        e.preventDefault()
        axios.post('https://reqres.in/api/user',{
        name: data.name,
        date: data.date,
        email: data.email,
        password: data.password,
        confirmpassword: data.confirmpassword })

        //  localStorage.setItem('user-info',  JSON.stringify(result))
        //     history.push ('/Form')




        .then(res=> {
            console.log(res)
        }    )
        .catch (error => {
            console.log(console.error)
        }
            )
         
    
     
    }

 
     
     
    return (
        <div className='header1'> 

            <div>
            <h1> Welcome </h1>
            <h2>Sign up if you dont have an account</h2>
            <br></br>
            </div>

            <div className='forms' >
                <form onSubmit={(e)=> submit(e)} >
                    <div className='forms1'>
                    <label>
                    < FaUserAlt className='icon' />  
                    < input 
                     type='text'  placeholder='Name' onChange={(e) =>Handle(e) }  id='name' value={data.name} />
                    </label>
                    </div>
                      <br></br>
                    <div
                    className='forms2'>
                    <label>
                    <input 
                         type='date' placeholder='Date of birth' onChange={(e) =>Handle(e)} id='date' value={data.date} /> 
                    </label>
                    </div>
                    <div
                    className='forms3'>
                    <label>
                    <FaAddressCard className='icon'/> 
                    <input 
                         type='text' placeholder='email' id='email' onChange={(e) =>Handle(e)}  value={data.email}  /> 
                    </label>
                    </div>
                    <div
                    className='forms4'>
                    <label>
                    <FaLock className='icon'/> 
                    <input 
                         type='password' placeholder='Password' onChange={(e) =>Handle(e)} id='password' value={data.password}  /> 
                    </label>
                    </div>
                    <div
                    className='forms5'>
                    <label>
                    <FaLock className='icon'/> 
                    <input 
                         type='password' placeholder='Confirm password' onChange={(e) =>Handle(e)} id='confirmpassword' value={data.confirmpassword} /> 
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
