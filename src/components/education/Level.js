import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

import CircularProgress from "@mui/material/CircularProgress";

const images = [
  {
    url: "javascript",
    title: "JavaScript",
    level: 40,
  },

  {
    url: "angular",
    title: "Angular",
    level: 20,
  },
  {
    url: "react",
    title: "React.js",
    level: 60,
  },
  {
    url: "vue",
    title: "Vue.js",
    level: 40,
  },
  {
    url: "nodejs",
    title: "Node.js",
    level: 20,
  },

  {
    url: "npm",
    title: "Npm",
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
  {
    url: "bootstrap",
    title: "Bootstrap",
    level: 70,
  },

  {
    url: "material",
    title: "Material-UI",
    level: 60,
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 100,
  [theme.breakpoints.down("sm")]: {
    width: "50% !important",
    height: 130,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    // "& .MuiTypography-root": {
    //   border: "4px solid currentColor",
    // },
  },
}));

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "end",
  justifyContent: "center",

  color: theme.palette.common.white,
 
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,

  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

export default function Level() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: 100,
        width: "100%",
        backgroundColor: "transparent",
      }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          sx={{
            width: { sm: "30%", md: "20%" },
          }}
        >
          {/* <ImageSrc requier style={{ backgroundImage: `url(${image.url})` }} /> */}
          <img
            alt={image.title}
            src={require(`../../image/techniqueImg/${image.url}.png`)}
          />

          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                component="span"
                variant="subtitle1"
                sx={{
                    position: "relative",
                  color: "#ccd6f6",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "start",

                  // pb: (theme) => `calc(${theme.spacing(1)} + 12px)`,
                  // marginTop: { xs: "5rem", md: "block" },
                }}
              >
                {image.title}
                {/* <ImageMarked className="MuiImageMarked-root" /> */}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  marginTop: "0.5rem",
                }}
              >
                <Typography
                  sx={{
                    color: "#8892b0",
                    // marginRight: {xs:"0rem"},
                  }}
                  variant="subtitle2"
                >
                  Nivå: {image.level}%
                </Typography>
                <CircularProgress
                  sx={{
                    "&:hover": {
                      color: "red",
                      opacity: 4,
                    },
                  }}
                  variant="determinate"
                  value={image.level}
                />
              </Box>
            </Box>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
