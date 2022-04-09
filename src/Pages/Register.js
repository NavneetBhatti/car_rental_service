import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import AuthContext from '../Components/context/AuthContext';

const Register = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData2, setFromDate] = useState({
    email: '',
    firstname: '',
    lastname: '',
    password: '',
  });
  const { firstname, lastname,email, password } = formData2;

  const onChange = (e) => {
    setFromDate({ ...formData2, [e.target.name]: e.target.value });
  };
  const [err,SetError]=useState("")

  const onSubmit = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let data = {
        firstname:firstname,
        lastname:lastname,
        email: email,
        password: password,
      };

  
    try {
      const response = await axios.post(
        'http://localhost:5000/api/user',
        data,
        config
      );

      console.log(response);
      localStorage.setItem('token', response.data.token);
      console.log(decode(response.data.token));
      auth.login();
      navigate('/');
    } catch (error) {
        if(error.response && error.response.status >= 400 && error.response.status <=500){
            SetError(error.response.data)
            console.log(err)
          }
    }
  };
  return (
    <div className='inner'>
      <h1>Sign Up</h1>
      <p>Create Your Account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
        <label>First Name</label>

          <input
            className='form-control'
            type='text'
            placeholder='First Name'
            name='firstname'
            
            value={firstname}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
        <label>Last Name</label>

          <input
            className='form-control'

            type='text'
            placeholder='Last Name'
            name='lastname'
            value={lastname}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
        <label>Email</label>

          <input
            className='form-control'
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
        <label>Password</label>

          <input
             className='form-control'
            type='password'
            placeholder='Password'
            name='password'
            minLength='4'
            value={password}
            onChange={(e) => onChange(e)}
          />

        </div>

    
        {err.errors && <div className='alert alert-danger'>{err.errors[0].msg}</div>}


        <input type='submit' value='Register' className='btn btn-dark btn-lg btn-block' />
      </form>
      <p>
        Already have an account? <Link to='/'>Sign In</Link>
      </p>
    </div>
  );
};

export default Register;