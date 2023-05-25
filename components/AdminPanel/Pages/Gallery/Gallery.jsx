import React from "react";
import { useState, useEffect } from "react";
import DeletePhoto from "./DeletePhoto";
import AddGalleryPhoto from "./AddGalleryPhoto";

const Gallery = () => {
  const [galleryPhotos, setGalleryPhotos] = useState([]);

  const getGalleryPhotos = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.BACKEND + "admin/getAllGalleryPhotos", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        console.log(data.galleryPhotos); // Log the response to verify its structure
        setGalleryPhotos(data.galleryPhotos);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getGalleryPhotos();
  }, []);

  return (
    <>
      <div className="my-10">
        <AddGalleryPhoto getGalleryPhotos={getGalleryPhotos} />
        <div className="flex flex-wrap justify-center items-center mt-10">
          {galleryPhotos.map((media, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 cursor-pointer border shadow flex flex-col items-center m-4"
            >
              <img
                src={media.photoImgUrl}
                alt="Image"
                className="w-full h-auto"
              />
              <DeletePhoto
                photoId={media.photoId}
                getGalleryPhotos={getGalleryPhotos}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
