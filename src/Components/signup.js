import "./signup.css";
import {Button, TextField} from '@mui/material';


const Signup =() => {

    return(

        <div class="container"> 
        
        <div class="card">

            <div class="row">

                <div class="col-md">
                    <div class="img-back"></div>
                     <img src="" alt=""/> 
                </div>

                <div class="col-md">
                    <div class="card-body my-card-body">
                        <p class="h3">Start Building Your future</p>
                        <p class="text-muted">Sign Up to Continue</p>

                        <hr/>
                        <form>

                             {/* <div class="form-floating">
                                <input id="email" type="email" class="form-control" placeholder="Email"/>

                                <label for="email">Email</label>
                            </div>  */}
                            
                            <TextField className="w-100 mt-5" variant="filled" id="email" type="email" label="Email Address" />



                            <TextField className="w-100 mt-3" variant="filled" id="full name" type="full name" label="Full Name" />



                            <TextField className="w-100 mt-3" variant="filled" id="password" type="Password" label="Password" />

                            <Button color="primary" variant="contained" className="mt-5 w-25">Sign Up</Button>

                            <a href="" class="text-muted mt-5" >Already have an account?</a>

                        </form>



                    </div>


                </div>

            </div>


        </div>

    </div>
    )
}
export default Signup;