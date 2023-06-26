import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetGalleryQuery } from '../store/apiSlice/apiSlice';
import { selectImages } from '../store/gallerySelect';

const ImageDetails = () => {
    const { id } = useParams();
    const images = useSelector(selectImages);

    console.log('here', id, images);


    // if (!data) {
    //     // Handle loading state or error
    //     return null;
    // }

    // const { title, description, upvotes, downvotes, score } = data;

    return (
        <div>
            {/* <h2>{title}</h2>
            <p>{description}</p>
            <p>Upvotes: {upvotes}</p>
            <p>Downvotes: {downvotes}</p>
            <p>Score: {score}</p> */}
            {/* Display the big image here */}
        </div>
    );
};

export default ImageDetails;
