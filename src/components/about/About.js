import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ContainerAbout } from "./About.Styled";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function About() {
  const { t } = useTranslation();
  return (
    <ContainerAbout>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%", maxWidth: 500, textAlign: "start" }}>
          <Typography
            variant="h3"
            gutterBottom
            component="h2"
            sx={{ color: "#64ffda" }}
          >
            {t("btn_about")}
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            component="h1"
            sx={{ color: "#ccd6f6" }}
          >
            {t("text_aboutName")}
          </Typography>

          <Typography
            variant="subtitle1"
            gutterBottom
            component="h3"
            sx={{ color: "#8892b0" }}
          >
            {t("text_aboutOm")}
          </Typography>
          <Typography sx={{ color: "#ccd6f6" }}>{t("text_phone")}</Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="start"
          >
            <Button
              to="#"
              onClick={() => (window.location = "mailto:alan.a@live.se")}
              component={Link}
              variant="outlined"
              endIcon={<SendIcon />}
            >
              {t("btn_contact")}
            </Button>
            <Button to="/" component={Link} variant="outlined">
              {t("btn_home")}
            </Button>
          </Stack>
        </Box>
        <Box sx={{ width: "30%" }}>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <CardMedia
              sx={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              component="img"
              src={require("../../image/20180410_214001.jpg")}
            />
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={{ color: "#4f5c76", marginTop: 5, textAlign: "center" }}
            >
              ”To get something you never had, you have to do something you
              never did.”
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "#64ffda", margin: 2, textAlign: "end" }}
            >
              - Denzel Washington
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </ContainerAbout>
  );
}
