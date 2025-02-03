import React, {useState} from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  }); 

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  
  const login = async () =>{
    console.log("Login Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    
  }

  const signup = async () => {
    if (!formData.username || !formData.email || !formData.password) {
      alert("All fields are required.");
      return;
    }
  
    console.log("Signup Function Executed", formData);
  
    let responseData;
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors || 'Sign up failed');
      }
  
      responseData = await response.json();
  
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors || 'Sign up failed');
      }
    } catch (error) {
      console.error('Error during sign up:', error);  // Log the full error to the console
      alert('An error occurred during sign up: ' + error.message);  // Display the specific error
    }
  };
  
  

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state ==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> :<></>}
          <input name='email' value={formData.email} onChange={changeHandler}  type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler}  type="password" placeholder='Password' />
        </div>
        <button onClick={()=>{state === "Login"?login():signup(); }}>Continue</button>
        {state === "Sign Up"?
        <p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login Here</span> </p>
      : <p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click Here</span> </p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the therms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup