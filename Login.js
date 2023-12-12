import React, { useState, useEffect, useRef  } from 'react'
import { useNavigate} from 'react-router-dom';
import './login.css';




const Login=()=>{


    const navigate = useNavigate();

    const [formData, setformData]=useState({

        email:'',
        pswd:'',

    });

    const[error,setError]=useState('');

    const handleInputChange = (e) => {  
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value,
        });
    };

    const handlereg = () => {
        // Non-registered usuer will navigate to Register page
        navigate('/register');
    };

    const handlelogin = async () => {
    
         if ( !formData.email || !formData.pswd) {
            alert('All fields are required.');
        }
        else if (formData.pswd.length<8){
            alert("invalid userid or password")
        }
         else {

            try {
                const response = await fetch('http://localhost:8081/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        pswd: formData.pswd,
                    }),
                }); 
    
                if (response.ok) {
                    // Login successful, navigate to the home page
                    alert("login successful");  
                    navigate('/');
                } else {
                    const data = await response.json();
                    alert(`Error: ${data.error || 'Something went wrong.'}`);
                }
            } catch (error) {
                console.error('Error during login:', error);
                alert('Something went wrong, please try again');
            }


        }
    




    };
    
    
    const myDivRef = useRef(null);

  useEffect(() => {
    // Scroll to myDiv when the component mounts
    myDivRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);
    
    return(
	<div className='box'  ref={myDivRef}>
		<p><h1>Login</h1></p>
        
        <form>
            <center>
        <input type='email' name='email' placeholder='Email' onChange={handleInputChange}  required/>
        <p>
        <input type='password' name='pswd' placeholder='Password' onChange={handleInputChange}  required/>
        </p>    

        <div className='submit'>

        <button type='submit' name='submit' onClick={handlelogin}> Submit 
       
</button>


        </div>

        <div className='submit1'>
        <button type='submit' name='submit' onClick={handlereg}> Not registered yet? </button>
        </div>
        </center>
        </form>
	</div>
	)
}
export default Login;


