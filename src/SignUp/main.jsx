import React from "react";
import './main.scss'
import img1 from '../img/breadcrumb-1[1].jpg'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { BsEye } from 'react-icons/bs'
import { BsEyeSlash } from 'react-icons/bs'

const schema = yup.object({
    fullName: yup.string().required().min(3, "Минимальная длина 3!"),
    email: yup.string().email("Неправильный email!").required(),
    password: yup.string().min(8, "Пароль не достаточно длинный!").required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают')
}).required();

    
function Signup() {


    const [showPassword, setShowPassword] = React.useState(false);

    const change = () => {
        setShowPassword(!showPassword);
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const Submit = (data) => console.log("data", data);
    return (
        <>


            <div className="register-img">
                <img src={img1} alt="Background" />
                <div className="register-text">
                    <h3>Register</h3>
                    <div>
                        <a href="http://localhost:5173/">Home</a>
                        <span>/</span>
                        <p>Register</p>
                    </div>
                </div>
            </div>



            <div className="sign-up">
                <div className="sign">

                    <form onSubmit={handleSubmit(Submit)}>
                        <h3>Create New Account</h3>
                        <input type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Full Name"
                            {...register('fullName')} />

                        <p style={{ color: "red" }}>{errors.fullName?.message}</p>

                        <input type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            {...register('email')} />

                        <p style={{ color: "red", fontSize: "14px" }}>{errors.email?.message}</p>

                        <div className="relative-eye">
                            <input type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                placeholder="Password"
                                {...register('password')} />
                            <button className='eye' onClick={change}>
                                {showPassword ? <BsEyeSlash /> : <BsEye />}
                            </button>
                        </div>

                        <p style={{ color: "red" }}>{errors.password?.message}</p>

                        <input type="text"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            className="confirm-password"
                            {...register('confirmPassword')} />

                        <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
                        <div className="accept">
                            <input type="checkbox" required />  <p>I Agree with the <a href="https://templates.envytheme.com/jube/default/terms-of-service.html">Terms & conditions</a></p>
                        </div>
                        <button><a href="http://localhost:5173/signup">Registre Now</a></button>
                        <p>Have an Account? <a href="https://templates.envytheme.com/jube/default/login.html">Sign In</a ></p>
                    </form>

                </div>
            </div>

        </>
    )
}
export default Signup;