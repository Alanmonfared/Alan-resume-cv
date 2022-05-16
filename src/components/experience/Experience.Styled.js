import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ContainerExperience = styled(Container)(({ theme }) => ({
  [theme.breakpoints.between("xs", "sm")]: {},

  [theme.breakpoints.down("md")]: {},

  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("xl")]: {},
}));

export const ImgBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.between("xs", "sm")]: {},

  [theme.breakpoints.up("lg")]: {
    position: "fixed",
    top: "450px",
    left: "1400px",
    right: "0",
  },

  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
  [theme.breakpoints.up("xl")]: {},
}));

export const TextBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.between("xs", "sm")]: {},

  [theme.breakpoints.down("md")]: {},

  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.up("xl")]: {},
}));
