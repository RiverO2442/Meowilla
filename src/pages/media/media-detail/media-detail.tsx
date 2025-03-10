import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ImageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Retrieve the image ID from the URL
  const tempSrc = "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e";
  useEffect(() => {
    console.log(`Image ID changed to: ${id}`);
    // Fetch new data or update the UI when `id` changes
  }, [id]);
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Image Detail</h1>
      <p>Displaying details for image ID: {id}</p>
      <img
        src={tempSrc}
        // src={`/images/${id}.jpg`}
        alt={`Image ${id}`}
        className="max-w-full h-auto mt-4"
      />
    </div>
  );
};

export default ImageDetail;
