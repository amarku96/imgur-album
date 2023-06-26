import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import ImageContent from './ImageContent';
import { useGetGalleryQuery } from '../store/apiSlice/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setSection } from '../store/apiSlice/gallerySlice';
import { useState } from 'react';
import ImageDetails from './ImageDetails';
import { Link } from 'react-router-dom';



const ImageGallery = () => {

  const filters = useSelector((state) => state.gallery);
  const { data } = useGetGalleryQuery(filters);
  const [selectedImageId, setSelectedImageId] = useState(null);
  console.log(filters);
  // Add null check for data object
  const nestedArray = Object.values(data?.data || {}).map(a => a);
  const combinedArray = nestedArray.flatMap(a => a);
  const handleImageClick = (imageId) => {
    setSelectedImageId(imageId);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {nestedArray?.map((i) => (

          <Grid item xs={2} sm={4} md={3} key={i.id}>

            <ImageContent title={i.title} id={i.id} description={i.description} imageURL='https://www.w3schools.com/howto/img_forest.jpg'
            ></ImageContent>


          </Grid>
        ))}
      </Grid>
      {/* {selectedImageId && <ImageDetails imageId={selectedImageId} />} */}

    </Box>
  );
};

export default ImageGallery;