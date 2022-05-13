import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography } from "@mui/material";
// import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function ImgList() {
  return (
    <Box sx={{ width: "100%", height: 300, overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.url}?w=248&fit=crop&auto=format`}
              srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <Typography>
                {item.title}
            </Typography>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    url: "https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png",
    title: "Javascript",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png",
    title: "TypeScript",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png",
    title: "Html5",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png",
    title: "Css",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
    title: "React.js",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
    title: "Node.js",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png",
    title: "Vue.js",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/A/angular-logo-B76B1CDE98-seeklogo.com.png",
    title: "Angular",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/B/bootstrap-5-logo-85A1F11F4F-seeklogo.com.png",
    title: "Bootstrap",
    width: "30%",
  },
  {
    url: "https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png",
    title: "Material-UI",
    width: "30%",
  },
];
