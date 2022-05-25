import React from "react";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function images2() {
  return (
    <ImageList variant="quilted" cols={4}>
      {items.map((item) => (
        <ImageListItem key={item.img} cols={2}>
          <img
            src={require(`../../image/techniqueImg/${item.url}.png`)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const items = [
  {
    url: "javascript",
    title: "JavaScript",
    level: 40,
  },

  {
    url: "html5",
    title: "Html5",
    level: 80,
  },

  {
    url: "css",
    title: "Css",
    level: 65,
  },
  {
    url: "wordpress",
    title: "Wordpress",
    level: 40,
  },
];
