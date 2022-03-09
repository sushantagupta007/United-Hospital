import React, { useEffect,useState} from 'react';
import {Container,Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './SignUp.css';
import useAuth from '../../Hooks/useAuth';


import { Link, useHistory } from 'react-router-dom';



const CustomMarginSignForm ={
    marginLeft:"3.8px"
}


const SignUp = () => {
        const history = useHistory(); 
        const { register, handleSubmit,reset } = useForm();
        const {userCreate,newUser} = useAuth(); 
        const [newregUser, setNewRegUser] = useState(null)

        const onSubmit = data => {
            const email= data.email
            const password = data.password
            const name = data.name
            console.log(data)
            userCreate(name,email,password,history)
            reset(); 
            
        };
    

        //Componen update when newUser change. 
        useEffect(()=>{
            setTimeout(() => {
                setNewRegUser(null)
            }, 1000);
        },[newUser])
     
    return (
        <Container  fluid id="signMainContainer" >
            <Container  id="regForm" className="w-50 mx-auto border py-4 rounded">
                {newregUser? <Alert variant="success">Account was created successfully</Alert> :""}
                
                <Container>
                <h6 className="text-center fontFamilyWork fontWeight700 primaryTextColor fs-1 "> SignUp  </h6>
                </Container>
           
                <form onSubmit={handleSubmit(onSubmit)} className='my-2'>
                    <div className="container py-1">
                        <div className="col m-0"> 
                            <div className="p-1 d-flex flex-column m-0">
                            <label className='primaryTextColor fw-bold'> Name </label>
                                    <input 
                                        style={{fontFamily:"Arial, FontAwesome"}}
                                        className='m-0 px-0 py-2 border-0 border-bottom'
                                        type="text"
                                        placeholder='&#xF007; Sushanta Gupta'
                                        {...register("name", { required: true})} 
                                    />
                            </div>
                        </div>
                        <div className="col m-0"> 
                            <div className="p-1 d-flex flex-column m-0">
                            <label className='primaryTextColor fw-bold'> Email </label>
                                
                                    <input 
                                        style={{fontFamily:"Arial, FontAwesome"}}
                                        className='m-0 px-0 py-2 border-0 border-bottom'
                                        type="text"
                                        placeholder='&#xF007; abc@gmail.com'
                                        {...register("email", { required: true})} 
                                    />
                            </div>
                        </div>
                        <div className="col m-0"> 
                            <div className="p-1 d-flex flex-column m-0">
                                <label className='primaryTextColor fw-bold'> Password </label>
                                <input 
                                    className="m-0 px-0 py-2 border-0 border-bottom "
                                    placeholder='password'
                                    type="password"
                                    {...register("password", {required:true, })} 
                                />
                            </div>
                        </div>
                    </div>
                    
                    <Container>
                        <button  id="loginBtn" className="w-100 ms-1 btn text-white border rounded" type="submit"> SIGN UP</button>
                    </Container>
                </form>
                    
                    <Container style={CustomMarginSignForm} className="border-top py-2">
                        <Link to="/signin" > Already User? Please Login</Link>
                    </Container>
            </Container>
           
        </Container>
    );
};

export default SignUp;
