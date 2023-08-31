import { message } from 'antd'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setLogin } from '../../State/index';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from '../../Components/InputField';
import ReactLoading from 'react-loading';
import { useState } from 'react';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const onSubmit = async (val) => {
        const { email, password } = val;
        setLoading(true);
        const { data } = await axios.post('http://localhost:6001/auth/login', { email, password });
        setLoading(false)
        if (data.success) {
            message.success(data.message);
            const { user, token } = data;
            dispatch(setLogin({ user, token }));
            navigate('/');
        }
        else message.error(data.message);
    }

    const validate = Yup.object({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .max(10, "Must be less than or equal to 10 characters")
            .required("Required"),
    });
    return (
        <>
            {loading ?
                <div className="h-screen w-full flex justify-center  items-center ">
                    <ReactLoading type={'spokes'} color={'#000'} height={150} width={150} />
                </div> :
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={validate}
                    onSubmit={values => onSubmit(values)}
                >
                    {formik =>
                        <div className="w-full max-w-[1400px] min-h-screen flex justify-between items-center flex-col md:flex-row">
                            <div className="w-full p-8 md:w-[50%]   h-full ">
                                <img src="Login.svg" alt="signup" className="w-[80%] h-auto object-contain mx-auto" />
                            </div>
                            <div className="w-full p-4 sm:p-8 md:w-[50%]   h-full  mb-8 md:my-8">
                                <Form className="w-full md:w-[85%] h-auto mx-auto p-4 sm:p-8 bg-white_900 dark:bg-black_900 text-black_500 dark:text-white_500 rounded-lg shadow-lg">
                                    <h2 className="text-center pb-4 text-orange-500">log in</h2>
                                    <InputField label="Email" type='email' name='email' />
                                    <InputField label="password" type='password' name='password' />
                                    <div className="flex mt-4">
                                        <button type="submit" className="cartBtn">Log in</button>
                                        <button type="reset" className="cartBtn bg-red-500">Reset</button>
                                    </div>
                                    <p className='mt-2 text-blue-500' >Create account? <Link className='cursor-pointer hover:underline' to={'/signup'}> Signup</Link></p>
                                </Form>
                            </div>
                        </div>}
                </Formik>
            }
        </>
    );
};

export default Login;


