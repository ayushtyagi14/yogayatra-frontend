import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MyHead from "../../../components/MyHead";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const InstructorProfile = () => {
    const router = useRouter();
    const { name, id } = router.query;
    const [instructor, setInstructor] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true); // Set loading state to true initially

        if (id) {
            getSingleInstructor(id);
        }
    }, [id]);

    const getSingleInstructor = (instructorId) => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(process.env.BACKEND + "admin/getSingleInstructor/" + instructorId, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                const data = result.instructor;
                console.log(data);
                setInstructor(data);
                setLoading(false); // Set loading state to false after fetching data
            })
            .catch((error) => console.log("error", error));
    };

    const formattedDesc = instructor?.instructorDesc && instructor.instructorDesc.replace(/\n/g, "<br>");

    return (
        <>
            <MyHead title="Sakina Vagh | Yogayatra" />
            <div className="w-full bg-[#B4AAA7] shadow z-[999]">
                <Navbar />
            </div>
            <div className="mx-10 mt-10 px-4 md:px-8 lg:px-16">
                <div className="flex flex-col md:flex-row items-center mb-8" key={instructor?._id}>
                    <img
                        src={instructor?.instructorImgUrl}
                        alt={instructor?.instructorName}
                        className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-8"
                    />
                    <div className="md:w-2/3">
                        <h1 className="text-3xl font-semibold mb-4">{instructor?.instructorName}</h1>
                        <p
                            className="text-lg mb-4"
                            dangerouslySetInnerHTML={{ __html: formattedDesc }}
                        />
                    </div>
                </div>
            </div>
            <Footer />

            {loading && (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            )}
        </>
    );
};

export default InstructorProfile;
