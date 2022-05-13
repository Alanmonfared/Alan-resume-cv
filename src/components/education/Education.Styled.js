import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";



export const ContainerEducation = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40vh",
    width: "100%",
    margin:"none",
  
    [theme.breakpoints.between("xs", "sm")]: {
      width: "50%",
      
  
    },
  
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  
  }));
  export const ImgBo = styled(Box)(({ theme }) => ({
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
      top: "150px",
      left: "1300px",
      right: "0",
      zIndex: -1,
      
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