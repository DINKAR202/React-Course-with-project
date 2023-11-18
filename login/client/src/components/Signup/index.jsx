import { useState } from 'react';
import styles from './styles.module.css';
import {Link} from 'react-router-dom';

const Signup = () =>{
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email:"",
        password:"",
    });

    const handleChange = ({currentTarget:input}) => {
        setData({...data, [input.name]: input.value});
    }


    return(
            <div className={styles.signup_container}>
                <div className={styles.signup_form_container}>
                    <div className={styles.left}>
                    <h1>Welcome Back</h1>   
                    <Link to="/login">
                        <button type='button' className={styles.white_btn}>
                            Signup
                        </button>
                    </Link> 
                    </div>
                    <div className={styles.right}>
                      <form className={styles.form_container}>
                            <h1>Create Account</h1>
                            <input type="text" 
                            placeholder='First Name' 
                            name='firstName'
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}
                            />
                        </form>          
                    </div>
                </div>
            </div>
    )
}

export default Signup;