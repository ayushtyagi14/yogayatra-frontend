import Modal from "react-modal";
import { useState } from "react";
import MyHead from '../components/MyHead'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

Modal.setAppElement("#__next");

const GalleryPage = () => {
    const [selectedMedia, setSelectedMedia] = useState(null);

    const mediaList = [
        { type: "video", src: "/assets/galleryVid1.mp4" },
        { type: "video", src: "/assets/galleryVid2.mp4" },
        { type: "image", src: "/assets/gallery1.jpg" },
        { type: "image", src: "/assets/gallery2.jpg" },
        { type: "image", src: "/assets/gallery3.jpg" },
        { type: "image", src: "/assets/gallery4.jpg" },
        { type: "image", src: "/assets/gallery5.jpg" },
        { type: "image", src: "/assets/gallery6.jpg" },
        { type: "image", src: "/assets/gallery7.jpg" },
        { type: "image", src: "/assets/gallery8.jpg" },
        { type: "image", src: "/assets/gallery9.jpg" },
        { type: "image", src: "/assets/gallery10.jpg" },
        { type: "image", src: "/assets/gallery11.jpg" },
        { type: "image", src: "/assets/gallery12.jpg" },
    ];

    const openModal = (media) => {
        setSelectedMedia(media);
    };

    const closeModal = () => {
        setSelectedMedia(null);
    };

    return (
        <>
            <MyHead title='Gallery | Yogayatra' />
            <div className="w-full bg-[#B4AAA7] shadow z-[999]">
                <Navbar />
            </div>
            <div className="flex flex-wrap justify-center items-center mt-10">
                {mediaList.map((media, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 cursor-pointer"
                        onClick={() => openModal(media)}
                    >
                        {media.type === "video" ? (
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                                className="w-full h-auto"
                            >
                                <source src={media.src} type="video/mp4" />
                            </video>
                        ) : (
                            <img src={media.src} alt="Image" className="w-full h-auto" />
                        )}
                    </div>
                ))}
            </div>

            <Modal
                isOpen={selectedMedia !== null}
                onRequestClose={closeModal}
                contentLabel="Media Modal"
                className="flex justify-center items-center"
                shouldCloseOnOverlayClick={true}
            >
                <button
                    className="absolute top-0 right-0 m-4 text-black bg-white px-1 rounded-lg hover:text-gray-700 focus:outline-none"
                    onClick={closeModal}
                >
                    Close
                </button>
                {selectedMedia && selectedMedia.type === "video" ? (
                    <video autoPlay muted loop playsInline className="w-auto h-screen">
                        <source src={selectedMedia.src} type="video/mp4" />
                    </video>
                ) : (
                    <img
                        src={selectedMedia && selectedMedia.src}
                        alt="Selected Image"
                        className="w-auto justify-center h-screen"
                    />
                )}
            </Modal>

            <Footer />
        </>
    );
};

export default GalleryPage
