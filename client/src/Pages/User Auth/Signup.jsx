import { Avatar, message } from 'antd'
import axios from 'axios';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setLogin } from '../../State/index';
import { UserOutlined } from '@ant-design/icons';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from '../../Components/InputField';
import Spinner from '../../Components/Spinner';

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (val) => {
        if (!photo) message.warning("upload your photo")
        else {
            setLoading(true);
            const { name, email, password, mobile } = val;
            let formData = new FormData();
            formData.append('name', name);
            formData.append('picture', photo);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('mobile', mobile);
            const { data } = await axios.post('https://e-commerce-u47d.onrender.com/auth/register', formData);
            setLoading(false);
            if (data.success) {
                const { user, token } = data;
                dispatch(setLogin({ user, token }))
                message.success(data.message);
                navigate('/');
            }
            else message.error(data.message);
        }
    }


    const validate = Yup.object({
        name: Yup.string()
            .max(15, "Must be 20 characters or less")
            .required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        mobile: Yup.number().required("Required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .max(10, "Must be less than or equal to 10 characters")
            .required("Required"),
        cpassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password should be matched")
            .required("confirm password is required"),
    });
    return (
        <>
            {loading ?
                <Spinner /> :
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        mobile: "",
                        cpassword: "",
                    }}
                    validationSchema={validate}
                    onSubmit={values => onSubmit(values)}
                >
                    {formik =>
                        <div className="w-full max-w-[1400px] min-h-screen flex justify-between items-center flex-col md:flex-row">
                            <div className="w-full p-8 md:w-[50%]   h-full ">
                                <img src="signup.svg" alt="signup" className="w-[80%] h-auto object-contain mx-auto" />
                            </div>
                            <div className="w-full p-4 sm:p-8 md:w-[50%]   h-full  mb-8 md:my-8">
                                <Form className="w-full md:w-[85%] h-auto mx-auto p-4 sm:p-8 bg-white_900 dark:bg-black_900 text-black_500 dark:text-white_500 rounded-lg shadow-lg">
                                    <h2 className="text-center pb-4 text-orange-500">sign up</h2>
                                    <div className="w-[6rem] h-[6rem] rounded-full overflow-hidden mx-auto my-4 relative">
                                        <Avatar src={photo ? URL.createObjectURL(photo) : ""} className='h-full w-full object-contain' icon={<UserOutlined className='text-[4rem] flex pt-2 ps-4 ' />} />
                                        <input type="file" name="image" accept='.jpg, .jpeg, .png' className='absolute w-full h-full top-0 left-0 rounded-full opacity-0 cursor-pointer' onChange={e => setPhoto(e.target.files[0])} />
                                    </div>
                                    <InputField label="Name" type='text' name='name' />
                                    <InputField label="Email" type='email' name='email' />
                                    <InputField label="mobile" type='text' name='mobile' />
                                    <InputField label="password" type='password' name='password' />
                                    <InputField label="confirm  password" type='password' name='cpassword' />
                                    <div className="flex mt-4">
                                        <button type="submit" className="cartBtn">register</button>
                                        <button type="reset" className="cartBtn bg-red-500">Reset</button>
                                    </div>
                                    <p className='mt-2 text-blue-500' >Already have an account? <Link className='cursor-pointer hover:underline' to={'/login'}> login</Link></p>
                                </Form>
                            </div>

                        </div>}
                </Formik>
            }
        </>
    );
};

export default Signup;


