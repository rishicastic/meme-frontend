import { Formik } from "formik";
import "./login.css"
const Login = () => {

    const url = 'http://localhost:5000';

    const loginform = {
        email : ' ',
        password : ' '
    }

    const loginSubmit =(values) => {
        console.log(values);
        fetch(url+'/user/login', { method: 'POST', body : JSON.stringify(values), headers : { 'Content-Type': 'application/json' } })
        .then(res => {
            if(res.status == 200){
                console.log('logged in');
                window.location.replace('/memegenerator');
            }else{
                console.log('login failed');
            }
        })
        
    }
    return(
        <div className="login-container container-fluid">
        <div className=" col-10 col-sm-5 col-md-4 col-xl-2 mx-auto">
            <div className="my-card">
        <img className="form-logo" src="logos.png" alt="png" / >
    
        <div className="subheader">
            <span id="active">SIGN IN</span>
            <span>SIGN UP</span>
        </div>

        <Formik initialValues={loginform} onSubmit={loginSubmit}>
            { ({ values,    handleChange , handleSubmit }) => (
                <form onSubmit ={handleSubmit}>
                    <input class="my-input" type="text" placeholder="Username" id="email" onChange={handleChange} value={values.email}/>
        <input class="my-input" type="text" placeholder="Password" id="password" onChange={handleChange} value={values.password}/>

        <div class="remember">
            <input type="checkbox"/>
            <span>Remember me</span>
        </div>
        

        <button type="submit" class="my-btn">Submit</button>

                </form>
            )}
        </Formik>
        <a href="/" class="link">Forgot Password</a>

    </div>
        </div>
     </div>
    )
}
export default Login;