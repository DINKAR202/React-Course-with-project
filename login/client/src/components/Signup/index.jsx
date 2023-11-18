import styles from './styles.module.css';
import {Link} from 'react-router-dom';

const Signup = () =>{
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
                            placeholder='' 
                            id="" 
                            />
                        </form>          
                    </div>
                </div>
            </div>
    )
}

export default Signup;