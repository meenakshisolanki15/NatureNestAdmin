import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LuLogIn } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import LoadingButton from '@mui/lab/LoadingButton';
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";


const SignUp = () => {

    const [loadingGoogle, setLoadingGoogle] = useState(false);
    const [loadingFb, setLoadingFb] = useState(false);
    const [isPasswordShow, setIsPasswordShow]= useState(false);

    function handleClickGoogle() {
        setLoadingGoogle(true);
    }
    function handleClickFb() {
        setLoadingFb(true);
    }
    return (
        <section className='bg-white w-full h-full '>
            <header className='w-full  fixed top-0 left-0 !px-4 !py-3 flex items-center justify-between 
                z-50'>
                <Link to="/" >
                    <img src="sign_Logo.jpg" className='w-[130px] !py-3 ' />
                </Link>

                <div className='flex items-center gap-0'>
                    <NavLink to="/login" exact="true" activeclassname="isActive">
                        <Button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1'>
                            <LuLogIn className='text-[18px]' /> Login
                        </Button>
                    </NavLink>

                    <NavLink to="/signUp" exact={true} activeclassname="isActive">
                        <Button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1'>
                            <FaRegUser className='text-[18px]' /> Sign Up
                        </Button>
                    </NavLink>
                </div>

            </header>
            <img src="/bg_sign.jpg" className='w-full fixed top-0 left-0 opacity-19' />

            <div className='loginBox card w-[45%] h-auto !pb-25 mx-auto !pt-20 relative z-50'>

                <h1 className='text-center text-[35px] font-[800] !mt-4'>
                    Join us today! Get Special<br/> benefits and stay up-to-date.
                </h1>

                <div className='flex items-center justify-center w-full !mt-5 gap-2'>
                    <LoadingButton
                        size="small"
                        onClick={handleClickGoogle}
                        endIcon={<FcGoogle />}
                        loading={loadingGoogle}
                        loadingPosition="end"
                        variant="outlined"
                        className='!bg-none text-[15px] !capitalize !px-5 !text-[rgba(0,0,0,0.7)]'
                    >
                        Sign In with Google
                    </LoadingButton>


                    <LoadingButton
                        size="small"
                        onClick={handleClickFb}
                        endIcon={<MdFacebook />}
                        loading={loadingFb}
                        loadingPosition="end"
                        variant="outlined"
                        className='!bg-none text-[15px] !capitalize !px-5 !text-[rgba(0,0,0,0.7)]'
                    >
                        Sign In with Facebook
                    </LoadingButton>
                </div>


                <br/>

                <div className='w-full flex items-center justify-center gap-3'>
                    <span className='flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]'></span>
                        <span className='text-[15px] font-[500]'> Or, Sign in with your email </span>
                    <span className='flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]'></span>
                    
                </div>

                <br/>

                <form className='w-full  !mb-7 !px-8'>
                     <div className='form-group !mb-6 w-full'>
                        <h4 className='text-[14px] font-[500]'> Full Name</h4>
                        <input 
                        type='text'
                        className='w-full h-[40px] border border[rgba(0,0,0,0.1)] rounded-md 
                        focus:border-[rgba(0,0,0,0.7)] focus:outline-none !px-3'/>
                     </div>
                     <div className='form-group !mb-4 w-full'>
                        <h4 className='text-[14px] font-[500]'> Email</h4>
                        <input 
                        type='text'
                        className='w-full h-[40px] border border[rgba(0,0,0,0.1)] rounded-md 
                        focus:border-[rgba(0,0,0,0.7)] focus:outline-none !px-3'/>
                     </div>

                     <div className='form-group !mb-4 w-full'>
                        <h4 className='text-[14px] font-[500]'> Password</h4>
                        <div className='relative w-full'>
                        <input 
                        type={isPasswordShow===false ? 'password' : 'text'}
                        className='w-full h-[50px] border border[rgba(0,0,0,0.1)] rounded-md 
                        focus:border-[rgba(0,0,0,0.7)] focus:outline-none !px-3'/>

                        <Button className='!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px]
                        !h-[35px] !min-w-[35px] !text-gray-600 ' 
                        onClick={()=>setIsPasswordShow(!isPasswordShow)}>
                            {
                                isPasswordShow===true ?(
                                    <FaRegEye className='text-[18px]'/>
                                ): (
                                    <FaEyeSlash className='text-[18px]'/>
                                )
                            }
                        </Button>
                        
                        </div>
                     </div>


                     



                     <Button className='btn-blue btn-lg w-full  !mt-5'>
                        Sign Up  
                     </Button>

                </form>

            </div>

        </section>
    )
}

export default SignUp;
