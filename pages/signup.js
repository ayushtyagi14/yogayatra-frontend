import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import Layout from "../components/Layout/Layout";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Signup = () => {
    const router = useRouter()

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [OTP, setOTP] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        mobileNumber: '',
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
        if (event.target.name === 'email') {
            setEmail(JSON.stringify(event.target.value));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const raw = JSON.stringify(formData);

        setLoading(true);
        const requestOptions = {
            method: 'POST',
            body: raw,
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow'
        };

        fetch("https://yogayatra.in/api/user/signup", requestOptions)
            .then(response => response.text(),)
            .then(result => {
                const data = JSON.parse(result);
                console.log("Signup", data)
                setLoading(false);
                if (data.resCode === 200) {
                    toast.success(
                        `${data.message}`,
                        {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 1500,
                        }
                    );
                    // setShowModal(true)
                    router.push('/login')
                    localStorage.setItem('userEmail', data.email)
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

    const [formData2, setFormData2] = useState({
        email: email,
        otp: '',
        responseFrom: "6"
    });

    const handleOTPChange = (event) => {
        setFormData2({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleVerify = async (e) => {
        e.preventDefault()
        const raw2 = JSON.stringify(formData2);

        var postOptions = {
            method: "POST",
            body: raw2,
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: "follow",
        };

        fetch("https://yogayatra.in/api/user/otp", postOptions)
            .then((response) => {
                console.log(response.status);
                if (response.status === 200) {
                    router.push("/login");
                    toast.success(
                        "Your Mobile Number has been verified!",
                        {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 1500,
                        }
                    );
                } else {
                    return null;
                }
            })
            .catch((error) => console.log(error));
    };

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
                    <h1 className="text-[40px] md:text-[100px]  font-alumni font-thin text-center mb-6">
                        Sign Up For <span className="text-[#f96454]"> Free </span>
                    </h1>
                    <form
                        className="flex flex-col w-[90%] md:w-full justify-center space-y-5 p-7"
                        onSubmit={handleSubmit}
                    >
                        <div className="md:flex md:flex-row md:items-center justify-between">
                            <div className="flex flex-col md:w-[48%]">
                                <label htmlFor="name" className="text-left text-lg mb-2">
                                    Name:
                                    <span className="text-red-500 font-bold">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="border rounded-lg px-4 py-2"
                                    placeholder="Enter your name"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col md:w-[48%]">
                                <label htmlFor="email" className="text-left text-lg mb-2">
                                    Email:
                                    <span className="text-red-500 font-bold">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="border rounded-lg px-4 py-2"
                                    placeholder="Enter your email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="md:flex md:flex-row md:items-center justify-between">
                            <div className="flex flex-col md:w-[48%]">
                                <label
                                    htmlFor="mobileNumber"
                                    className="text-left text-lg mb-2"
                                >
                                    Phone Number:
                                    <span className="text-red-500 font-bold">*</span>
                                </label>
                                <input
                                    type="tel"
                                    className="border rounded-lg px-4 py-2"
                                    placeholder="Enter your phone number"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleInputChange}
                                    onWheel={(e) => e.target.blur()}
                                    required
                                />
                            </div>
                            <div className="flex flex-col md:w-[48%]">
                                <label htmlFor="password" className="text-left text-lg mb-2">
                                    Password:
                                    <span className="text-red-500 font-bold">*</span>
                                </label>
                                <input
                                    type="password"
                                    className="border rounded-lg px-4 py-2"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            {loading ? (
                                <FaSpinner className="animate-spin" />
                            ) : (
                                <button
                                    type="submit"
                                    className="py-2 px-8 text-white font-bold bg-[#b4aaa7] border rounded hover:text-[#b4aaa7] hover:bg-white"
                                >
                                    Sign up
                                </button>
                            )}
                        </div>
                    </form>
                    <p className='mb-10'>Already have an account? <span className=' text-blue-800 cursor-pointer' onClick={() => router.push('/login')}>LogIn</span></p>
                </div>
            </div>
            <div className="w-full bg-[#e6e6e6]">
                <Footer />
            </div>

            {showModal ? (
                <>
                    {console.log(email)}
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex justify-end text-left mt-5 mr-5">
                                    <button
                                        className="text-[#f86454] font-bold text-2xl"
                                        onClick={() => setShowModal(false)}
                                    >
                                        x
                                    </button>
                                </div>
                                <form
                                    onSubmit={handleVerify}
                                    className="relative w-full flex flex-col items-center pt-2 px-10 pb-10"
                                >
                                    <label className="mb-4 text-[#f86454] text-[30px] font-thin text-center">
                                        An OTP has been sent to your Email Address
                                    </label>
                                    <input
                                        type="number"
                                        className="border rounded px-2 py-2 text-sm w-full font-poppins"
                                        placeholder="Enter your OTP"
                                        value={formData2.otp}
                                        onWheel={(e) => e.target.blur()}
                                        onChange={handleOTPChange}
                                        name="otp"
                                        id="otp"
                                    />
                                    <button
                                        type="submit"
                                        className=" border rounded-md overflow-hidden mt-4 w-1/2 text-[#f86454] text-[24px] font-thin bg-white hover:bg-[#f86454] hover:text-white"
                                        onClick={(e) => handleVerify(e)}
                                    >
                                        Verify OTP
                                    </button>
                                    {/* {showButton && ()} */}
                                    <button
                                        className="text-[13px] mt-4 w-1/2 my-2 text-[#0000ff] cursor-pointer font-poppins"
                                    // onClick={(e) => handleResend(e)}
                                    >
                                        Resend OTP
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default Signup;
