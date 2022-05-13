import React from "react";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Images() {
  return (
    <ImageList
      sx={{ width: 300, height: "auto" }}
      variant="quilted"
      cols={4}
      rowHeight={200}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 2}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
    title: "Breakfast",
  },

  {
    img: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?cs=srgb&dl=pexels-realtoughcandycom-11035471.jpg&fm=jpg",
    title: "Burger",
  },
  {
    img: "https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?cs=srgb&dl=pexels-realtoughcandycom-11035386.jpg&fm=jpg",
    title: "Breakfast",
  },
  {
    img: "https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg?cs=srgb&dl=pexels-realtoughcandycom-11035371.jpg&fm=jpg",
    title: "Camera",
  },
];
