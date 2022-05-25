import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/700.css";
import { ContainerHome, ImgBox } from "./Home.Styled";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";
import Smoke from "../../media/blueSmoke.mp4";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const downloadFile = () => {
  const link = document.createElement("a");
  link.download = `Alan_Monfared_CV.pdf`;
  link.href = `../../../public/files/Alan_Monfared_CV.pdf`;
  link.click();
};

export default function Home() {
  const { t } = useTranslation();
  const userName = "Alan Monfared";
  return (
    <ContainerHome>
      <ImgBox></ImgBox>

      <video
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          objectFit: "cover",
          zIndex: "-1",
        }}
        autoPlay
        muted
      >
        <source src={Smoke} />
      </video>
      <ThemeProvider theme={theme}>
        <Box sx={{ padding: "0.5rem", zIndex: 1 }}>
          <Typography variant="h6" gutterBottom sx={{ color: "#64ffda" }}>
            {t("home_text")}
          </Typography>

          <Typography variant="h3" component="h1" sx={{ color: "#ccd6f6" }}>
            {t("my_name", { name: userName })}
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ color: "#8892b0" }}>
            {t("home_curious")}
          </Typography>
          <Typography variant="p" gutterBottom sx={{ color: "#4f5c76" }}>
            {t("home_all")}
          </Typography>
          <Stack
            sx={{ mt: 1 }}
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
            <Button
              to="#"
              onClick={downloadFile}
              component={Link}
              variant="outlined"
              endIcon={<DownloadIcon />}
            >
              {t("btn_cv")}
            </Button>
          </Stack>
        </Box>
      </ThemeProvider>
    </ContainerHome>
  );
}
