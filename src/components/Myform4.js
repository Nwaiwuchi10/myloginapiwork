import axios from 'axios'
import React, { useState, useEffect} from 'react'
import {FaAddressCard, FaLock,  FaUserAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'



const Form = () => {

    
    const [name, setName] = useState ('')
    const [date, setDate] = useState ('')
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [confirmpassword, setConfirmpassword] = useState ('')
   

    // useEffect(() => {
    //    if (localStorage.getItem('user-info'))
    //    history.push('/Form')
    // },[] )
   

    async  function signup () {
          console.warn (name,date,email,password,confirmpassword)
           const item ={name,date,email,password,confirmpassword}
           const result = axios.post ('http://reqres.in/api/register',{
               headers:{
                   "Content-Type":'application/json',
                   'Accept':'application/json'
               },
               body: JSON.stringify(item)
           })
            result = await result.json();
            // localStorage.setItem('user-info',  JSON.stringify(result))
            // history.push ('/Form')

            


        }

     

    
    // const submit = (e) => {
    //     e.preventDefault()
    //     axios.post('https://reqres.in/api/register',{
    //     name: data.name,
    //     date: data.date,
    //     email: data.email,
    //     password: data.password,
    //     confirmpassword: data.confirmpassword })



        

 
     
     
    return (
        <div className='header1'> 

            <div>
            <h1> Welcome </h1>
            <h2>Sign up if you dont have an account</h2>
            <br></br>
            </div>

            <div className='forms' >
                <form  >
                    <div className='forms1'>
                    <label>
                    < FaUserAlt className='icon' />  
                    < input 
                     type='text'  placeholder='Name' onChange={(e) =>setName(e.target.value)}  id='name' value={name} />
                    </label>
                    </div>
                      <br></br>
                    <div
                    className='forms2'>
                    <label>
                    <input 
                         type='date' placeholder='Date of birth' onChange={(e) =>setDate(e.target.value)}  id='date' value={date}/> 
                    </label>
                    </div>
                    <div
                    className='forms3'>
                    <label>
                    <FaAddressCard className='icon'/> 
                    <input 
                         type='text' placeholder='email' id='email' onChange={(e) =>setEmail(e.target.value)}   value={email}  /> 
                    </label>
                    </div>
                    <div
                    className='forms4'>
                    <label>
                    <FaLock className='icon'/> 
                    <input 
                         type='password' placeholder='Password' onChange={(e) =>setPassword(e.target.value)}  id='password' value={password}  /> 
                    </label>
                    </div>
                    <div
                    className='forms5'>
                    <label>
                    <FaLock className='icon'/> 
                    <input 
                         type='password' placeholder='Confirm password' onChange={(e) =>setConfirmpassword(e.target.value)}  id='confirmpassword' value={confirmpassword}  /> 
                    </label>
                    </div>

                    <Link to='./Form'><p>Sign In here</p></Link>

                    <div className='forms6'>
                    <label>
                    <input onClick={signup}
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
