import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const ContainerHome = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  // height: "90vh",
  width: "50%",
  height: "80vh",
  // marginTop: "auto",

  [theme.breakpoints.between("xs", "sm")]: {
    width: "50%",
    marginTop: "auto",
  },

  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },

  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("xl")]: {
    width: "70%",
  },
}));

export const ImgBox = styled(Box)(({ theme }) => ({
  // position: 'fixed',
  // top:'10px',
  // left:'1200px',
  // right:'0',
  position: "absolute",
  width: "100%",
  height: "100%",
  left: 0,
  top: 0,
  // right: "100%",
  backgroundColor: "rgba(0,0,0,.7)",
  // transform: "translate(-50%,-50%)",
  // objectFit: "cover",

  [theme.breakpoints.between("xs", "sm")]: {
    // width: "50%",
  },

  [theme.breakpoints.down("md")]: {
    // width: "80%",
  },

  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.up("xl")]: {},
}));

// fixed sx={{ position: "fixed", top: 0, left:{xs: 100, sm: 200, md: 300, lg: 400, xl:1000} }}
