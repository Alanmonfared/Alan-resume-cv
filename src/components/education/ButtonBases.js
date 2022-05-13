import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
// https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png
import { useTranslation } from "react-i18next";

import Stack from "@mui/material/Stack";
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
  height: 200,

  ".n": {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    width: "50% !important",
    height: 250,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .n": {
      display: "block",
      justifyContent: "end",
      alignItems: "end",
      margin: "3rem",
    },
    "& .nn": {
      display: "none",
    },
    // "& .MuiTypography-root": {
    //   border: "4px solid currentColor",
    // },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center ",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  //   backgroundColor: theme.palette.common.black,

  color: theme.palette.common.white,
  "&:hover": +{
    backgroundColor: "black",
    opacity: 0.4,
  },
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

const ImageMarked = styled("span")(({ theme }) => ({
  height: 1,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ButtonBases() {
  const [progress, setProgress] = React.useState(0);
  const { t } = useTranslation();

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
            className="nn"
            alt={image.title}
            src={require(`../../image/techniqueImg/${image.url}.png`)}
          />

          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Box
              className="nn"
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
                  justifyContent: "end",
                  margin: "0.1rem",
                  marginLeft: "5rem",
                }}
              >
                <Typography
                  sx={{ fontSize: "0.7rem", color: "#8892b0" }}
                  variant="subtitle1"
                >
                  {t("text_level")}
                </Typography>

                <ArrowRightAltSharpIcon sx={{ color: "#8892b0" }} />
              </Box>
            </Box>

            <Box
              className="n"
              // sx={{
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   marginTop: "8rem",
              // }}
            >
              <Typography
                sx={{
                  color: "#8892b0",
                  marginBottom: "1rem",
                }}
                variant="subtitle2"
              >
                {image.level}%
              </Typography>
              <CircularProgress variant="determinate" value={image.level} />
            </Box>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
