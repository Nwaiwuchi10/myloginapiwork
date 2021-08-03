import React from 'react' 
import {FaAddressBook, FaAddressCard, FaContao } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Forgetpass = () => {


    return (

        <div className='header'>
            <div className='forms2-1'>
            <h1>Forgot Password</h1>
            <p>Enter your username below to reset your account</p>
            </div>
            
            <div className='form3-1'>
            < FaAddressBook className='icon' />  
            
            <input type='text'  placeholder='Username' />
            </div>
                 <div className='forms6-1'>

                <input type='Submit'  placeholder='Reset Account' />
            </div>
            <div className='form5-1'>
                <Link to='./Form' > <p>back to sign in</p> </Link>
            </div>

        </div>
    

    
    )
}

export default Forgetpass
