import {Link} from 'react-router-dom'
import React, { useState, payload,  } from 'react'
import {FaLock,  FaUserAlt} from 'react-icons/fa'
import { useHistory } from 'react-router-dom';



const Form = () => {

   const [email, setEmail] = useState ('')
   const [password, setPassword] = useState ('')






    
        const history = useHistory();
        
        const handleHistory = () => {
            history.push('/Homepage');
        }
      




    const onSubmit = ({history}) => {
         const payload = {
             email:"eve.holt@reqres.in",
             password:'cityslicka'
         }
     }
  fetch ('https://reqres.in/api/login', useState,{
      method: 'POST',
      headers:{
          'Accept': 'application/json',
          'content-type': 'application/json'
      },
      body:JSON.stringify(payload)
  })
    
        .then(res=> res.json())
            .then((data) =>{
                console.log (data);

               
                if (data.successful) {
                    history.push('/Homepage')
                
            } 
                })


       
     
    return (
        <div className='header'> 

            <div>
            <h1> Welcome </h1>
            <h2>Sign in to your account</h2>
            <br></br>
            </div>


            <div className='form' >
                <form  >
                    <div className='form1'>
                    <label>
                    < FaUserAlt className='icon' />  
                    < input 
                     type='text' placeholder='Email' id='email' onChange={(e) =>setEmail(e.target.value)}   value={email} />
                    </label>
                    </div>
                      <br></br>
                    <div
                    className='form2'>
                    <label>
                    <FaLock className='icon'/> 
                    <input 
                         type='password' placeholder='Password' onChange={(e) =>setPassword(e.target.value)}  id='password' value={password}   /> 
                    </label>
                    </div>

                    <Link to='./form2'><p >Sign Up here</p></Link>
                    <Link to='./Forgetpass'> <p className='shift'>Forgotten password?</p> </Link>

                    <div className='form3'>
                    <label>
                    <input onClick={handleHistory }
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
