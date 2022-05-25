import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ContainerEducation = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40vh",
  width: "100%",
  margin: "none",

  [theme.breakpoints.between("xs", "sm")]: {
    width: "50%",
  },

  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
}));
export const ImgBo = styled(Box)(({ theme }) => ({
  [theme.breakpoints.between("xs", "sm")]: {},

  [theme.breakpoints.up("lg")]: {
    position: "fixed",
    top: "150px",
    left: "1300px",
    right: "0",
    zIndex: -1,
  },

  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
  [theme.breakpoints.up("xl")]: {},
}));
