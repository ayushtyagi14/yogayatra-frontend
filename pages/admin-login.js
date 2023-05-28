import React from 'react'
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import MyHead from '../components/MyHead';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AdminLogin = () => {
    const router = useRouter()

    const [loading, setLoading] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)

        const raw = JSON.stringify(formData);

        const requestOptions = {
            method: 'POST',
            body: raw,
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow'
        };

        fetch(process.env.BACKEND + "user/login", requestOptions)
            .then(response => response.text(),)
            .then(result => {
                const data = JSON.parse(result);
                setLoading(false);
                console.log(data)
                if (data.userType === "Admin") {
                    localStorage.setItem("isAdmin", true)
                    toast.success(
                        "Welcome to Admin Panel!",
                        {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 1500,
                        }
                    );
                    router.push('/admin-panel')
                }
                else {
                    toast.error(
                        "You are not Authorised!",
                        {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 1500,
                        }
                    );
                }
            })
            .catch(error => console.log('error', error));
    };

    useEffect(() => {
        setIsAdmin(localStorage.getItem('isAdmin'))
    }, [])

    if (isAdmin) {
        router.push('/admin-panel')
    }

    return (
        <>
            <MyHead title='Admin Login | Yogayatra' />
            <div className="w-full bg-[#353746] shadow z-[999]">
                <Navbar />
            </div>
            <div className="text-center flex flex-col items-center font-poppins bg-[#fffaf4] w-full py-16">
                <h1 className="text-[40px] md:text-[100px] mt-5 font-alumni font-thin">
                    Login To <span className="text-[#f96454]"> Admin Panel </span>
                </h1>
                <form
                    className="flex flex-col w-[90%] md:w-[40%] justify-center space-y-5 p-7"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col">
                        <label className="text-left text-[14px]">
                            Email:
                            <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                            type="email"
                            className="border rounded px-4 py-2 text-[14px]"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-left text-[14px]">
                            Password:
                            <span className="text-red-500 font-bold">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="border rounded px-4 py-2 w-full pr-10 text-[14px]"
                                placeholder="Enter your password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <button
                                type="button"
                                className="absolute top-0 right-0 bottom-0 px-4 flex items-center"
                                onClick={handleTogglePassword}
                            >
                                {showPassword ? (
                                    <img src="https://img.icons8.com/fluency-systems-regular/20/null/hide.png" />
                                ) : (
                                    <img src="https://img.icons8.com/fluency-systems-regular/20/null/visible.png" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col"></div>
                    <div className="flex justify-center">
                        {loading ? (
                            <FaSpinner className="animate-spin" />
                        ) : (
                            <button
                                type="submit"
                                className="py-1 px-7 text-white font-bold bg-[#353746] border rounded hover:text-[#353746] hover:bg-white"
                            >
                                <span>LogIn</span>
                            </button>
                        )}
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default AdminLogin
