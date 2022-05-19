import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
import { ImgBo } from "./Education.Styled";
import ButtonBases from "./ButtonBases";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const mdTheme = createTheme();

export default function Education() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={mdTheme}>
      <Box
        component="main"
        sx={{
          backgroundColor: "transparent",
          flexGrow: 1,
          height: "100vh",
        }}
      >
        <Container maxWidth="lg" sx={{ pt: 10 }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            sx={{ color: "#64ffda" }}
            gutterBottom
          >
            {t("btn_education")}
          </Typography>

          <Grid container spacing={5}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{
                display: { xs: "flex" },
                flexDirection: "column",
                margin: "1rem",
              }}
            >
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  height: 50,
                  margin: 3,
                  backgroundColor: "transparent",
                  borderLeft: 5,
                  borderColor: "primary.main",
                }}
              >
                <Typography sx={{ color: "#8892b0", margin: "0.5rem" }}>
                  EC utbildning
                </Typography>
                <Typography sx={{ color: "#ccd6f6" }}>2020 - 2022</Typography>

                <Typography sx={{ color: "#8892b0" }}>
                  {t("text_educationFront")}
                </Typography>
              </Paper>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  height: 50,
                  margin: 3,
                  backgroundColor: "transparent",
                  borderLeft: 5,
                  borderColor: "primary.main",
                }}
              >
                <Typography sx={{ color: "#8892b0", margin: "0.1rem" }}>
                  Kunskaps Companiet
                </Typography>
                <Typography sx={{ color: "#ccd6f6" }}>2014 - 2015</Typography>

                <Typography sx={{ color: "#8892b0" }}>
                  {t("text_educationBygg")}
                </Typography>
              </Paper>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  height: 50,
                  margin: 3,
                  backgroundColor: "transparent",
                  borderLeft: 5,
                  borderColor: "primary.main",
                }}
              >
                <Typography sx={{ color: "#8892b0" }}>
                  Wenströmska Gymnasiet
                </Typography>
                <Typography sx={{ color: "#ccd6f6", alignSelf: "center" }}>
                  2006 - 2009
                </Typography>

                <Typography sx={{ color: "#8892b0" }}>
                  {t("text_educationYrkes")}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button to="/internship" component={Link} variant="contained">
              {t("btn_internship")}
            </Button>
            <Button to="/experience" component={Link} variant="contained">
              {t("btn_experience")}
            </Button>
            <Button to="/" component={Link} variant="outlined">
              {t("btn_home")}
            </Button>
          </Stack>

          <Grid item xs={10} sm={12} lg={12}>
            <Box
              sx={{
                p: 10,
                backgroundColor: "transparent",
              }}
            >
              <Typography sx={{ color: "#ccd6f6" }} variant={"h6"}>
                {t("text_educationCompotence")}
              </Typography>
              <ButtonBases />
            </Box>
          </Grid>
        </Container>
      </Box>

      <ImgBo>
        <img src={require("../../image/imgbin_smoke-png.png")} alt="logo" />
      </ImgBo>
    </ThemeProvider>
  );
}
