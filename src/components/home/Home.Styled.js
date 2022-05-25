import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const ContainerHome = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  width: "50%",
  height: "80vh",

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
  position: "absolute",
  width: "100%",
  height: "100%",
  left: 0,
  top: 0,
  backgroundColor: "rgba(0,0,0,.7)",

  [theme.breakpoints.between("xs", "sm")]: {},

  [theme.breakpoints.down("md")]: {},

  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.up("xl")]: {},
}));
