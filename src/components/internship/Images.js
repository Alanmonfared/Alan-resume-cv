import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Images() {
  return (
    <ImageList variant="quilted" cols={2}>
      {items.map((item) => (
        <ImageListItem key={item.img} cols={1}>
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
    url: "react",
    title: "React.js",
    level: 60,
  },

  {
    url: "typescript",
    title: "Typescript",
    level: 30,
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
    url: "material",
    title: "Material-UI",
    level: 60,
  },
];
