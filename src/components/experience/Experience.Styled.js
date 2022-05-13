import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ContainerExperience = styled(Container)(({ theme }) => ({
  // marginTop:'auto',
  [theme.breakpoints.between("xs", "sm")]: {},

  [theme.breakpoints.down("md")]: {},

  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("xl")]: {},
}));

export const ImgBox = styled(Box)(({ theme }) => ({
  // position: "fixed",
  // top: "460px",
  // left: "1800px",
  // right: "0",

  [theme.breakpoints.between("xs", "sm")]: {
    // width: "50%",
  },

  [theme.breakpoints.up("lg")]: {
    // width: "80%",
    position: "fixed",
    top: "450px",
    left: "1400px",
    right: "0",
    
    
  },

  [theme.breakpoints.down("lg")]: {
    // position: "fixed",
    // top: "450px",
    // left: "1100px",
    // right: "0",
    display: "none",
   

  },
  [theme.breakpoints.up("xl")]: {
   
  },
}));

export const TextBox = styled(Box)(({ theme }) => ({
  // msTransformOrigin: "20% 10%",
  // transformOrigin: "10% 10%",
  // msTransform: " rotate(90deg)",
  // transform: "rotate(90deg)",

  // transform-origin: bottom right 6px;
  [theme.breakpoints.between("xs", "sm")]: {
    // width: "50%",
  },

  [theme.breakpoints.down("md")]: {
    // width: "80%",
  },

  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.up("xl")]: {},
}));

