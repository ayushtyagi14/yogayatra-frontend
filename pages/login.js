import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
    const router = useRouter()

    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthentcated] = useState(false)

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

        fetch("https://client-project-backend.onrender.com/api/user/login", requestOptions)
            .then(response => response.text(),)
            .then(result => {
                const data = JSON.parse(result);
                setLoading(false);
                if (data.resCode === 200) {
                    localStorage.setItem("authenticated", true)
                    localStorage.setItem("userDetails", data)
                    toast.success(
                        "Logged In Successfully!",
                        {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 1500,
                        }
                    );
                    router.push('/dashboard')
                }
                else {
                    toast.error(
                        `${data.message}`,
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
        setIsAuthentcated(localStorage.getItem('authenticated'))
    }, [])

    if (isAuthenticated) {
        router.push('/dashboard')
    }

    return (
        <>
            <div className="w-full bg-[#B4AAA7] shadow z-[999]">
                <Navbar />
            </div>
            <div className="flex flex-col md:flex-row w-full justify-between">
                <img
                    src="/assets/signup-page.jpg"
                    alt="signup-page"
                    className="w-full md:w-[40%]"
                />
                <div className="text-center flex flex-col items-center font-poppins bg-[#fffaf4] w-full md:w-[60%]">
                    <h1 className="text-[40px] md:text-[100px] mt-5 font-alumni font-thin">
                        Please Login To <span className="text-[#f96454]"> Continue </span>
                    </h1>
                    <form
                        className="flex flex-col w-[90%] md:w-[65%] justify-center space-y-5 p-7"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col">
                            <label className="text-left text-[14px]">
                                Email:
                                <span className="text-red-500 font-bold">*</span>
                            </label>
                            <input
                                type="email"
                                className="border rounded px-4 py-2"
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
                            <input
                                type="password"
                                className="border rounded px-4 py-2"
                                placeholder="Enter your password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <span
                                className="text-sm my-2 text-blue-800 cursor-pointer mt-10"
                            >
                                Forgot password?
                            </span>
                            <span>
                                Don&apos;t have an account?
                                <span
                                    className="text-sm my-2 text-blue-800 cursor-pointer"
                                    onClick={() => router.push('/signup')}
                                >
                                    Sign Up
                                </span>
                            </span>
                        </div>
                        <div className="flex flex-col"></div>
                        <div className="flex justify-center">
                            {loading ? (
                                <FaSpinner className="animate-spin" />
                            ) : (
                                <button
                                    type="submit"
                                    className="py-1 px-7 text-white font-bold bg-[#b4aaa7] border rounded hover:text-[#b4aaa7] hover:bg-white"
                                >
                                    <span>LogIn</span>
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
