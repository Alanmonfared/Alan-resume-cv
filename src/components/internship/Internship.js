import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Images from "./Images";
import Images2 from "./images2";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

// const tiers = [
//   {
//     title: "LeoVegas",
//     description: [
//       "02/2022-04/2022",
//       "Jobbade med ett projekt som heter Lemur vilket är en adminsida för att lägga till och ta bort spel.",
//     ],
//     teknik: [
//       "JavaScript, React.Js, TypeScript, Material-UI och Styled-component",
//     ],
//   },

//   {
//     title: "Digitalpartner",
//     description: [
//       "11/2021-02/2022",
//       "Utvecklande av en webshop för kund. Webshopen riktar sig in mot försäljning av kläder.",
//     ],
//     teknik: ["WordPress - Teman: Oxyen, - Flatsome. Html, Css och JavaScript"],
//   },
// ];

const leoV = (
  <Box sx={{ m: 1 }} elevation={4}>
    <Box sx={{ width: 100, height: 100 }}>
      <Images />
    </Box>
  </Box>
);
const digi = (
  <Box sx={{ m: 1 }} elevation={4}>
    <Box sx={{ width: 100, height: 100 }}>
      <Images2 />
    </Box>
  </Box>
);

export default function Internship() {
  const [leo, setLeo] = React.useState(true);
  const [digital, setDigital] = React.useState(false);
  const { t } = useTranslation();

  const handleChangeLeo = () => {
    setLeo((prev) => !prev);
  };
  const handleChangeDigital = () => {
    setDigital((prev) => !prev);
  };

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 10 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          sx={{ color: "#64ffda" }}
          gutterBottom
        >
          {t("btn_internship")}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{ color: "#ccd6f6" }}
          component="p"
        >
          {t("text_internPage")}
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button to="/experience" component={Link} variant="contained">
            {t("btn_experience")}
          </Button>
          <Button to="/" component={Link} variant="outlined">
            {t("btn_home")}
          </Button>
        </Stack>
      </Container>

      <Container sx={{ py: 4 }} maxWidth="md">
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              justifyContent: "center",
              marginTop: "5rem",
            }}
          >
            <Card
              sx={{
                backgroundColor: "transparent",
                color: "#8892b0",
                "&:hover": {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[800]
                      : theme.palette.grey[700],
                },
              }}
            >
              {/* <CardMedia
                  component="img"
                  src={require("../../image/ups-logo-transparent-4275.png")}
                  alt="random"
                  // sx={{ width: "200px" }}
                /> */}
              <CardContent align={"center"} sx={{ flexGrow: 1 }}>
                <Typography
                  sx={{ color: "#64ffda" }}
                  gutterBottom
                  variant="h5"
                  component="span"
                >
                  LeoVegas
                </Typography>
                <Typography>{t("text_dateLeo")}</Typography>
                <Typography sx={{ color: "#ccd6f6", marginTop: "1rem" }}>
                  {t("text_leo")}
                </Typography>
                <Typography sx={{ color: "#8892b0", marginTop: "1rem" }}>
                  {t("text_verktygTeknik")}:
                </Typography>

                <Typography sx={{ color: "#ccd6f6", marginTop: "1rem" }}>
                  JavaScript, React.Js, TypeScript, Material-UI och
                  Styled-component
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                marginLeft: "1rem",
                backgroundColor: "transparent",
                color: "#8892b0",
                "&:hover": {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[800]
                      : theme.palette.grey[700],
                },
              }}
            >
              {/* <CardMedia
                  component="img"
                  image="https://source.unsplash.com/random"
                  alt="random"
                /> */}
              <CardContent align={"center"} sx={{ flexGrow: 1 }}>
                <Typography
                  sx={{ color: "#64ffda" }}
                  gutterBottom
                  variant="h5"
                  component="span"
                >
                  Digitalpartner
                </Typography>

                <Typography>{t("text_dateDigi")}</Typography>
                <Typography sx={{ color: "#ccd6f6", marginTop: "1rem" }}>
                  {t("text_digi")}
                </Typography>
                <Typography sx={{ color: "#8892b0", marginTop: "1rem" }}>
                  {t("text_verktygTeknik")}:
                </Typography>
                <Typography sx={{ color: "#ccd6f6", marginTop: "1rem" }}>
                  WordPress - Teman: Oxyen, - Flatsome. Html, Css och JavaScript
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container
        sx={{
          marginTop: "5rem",
          padding: 0,
          listStyle: "none",
          display: { xs: "none", sm: "none", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography sx={{ color: "#8892b0" }}>
            Clicka mig för att se Teknik coh program
          </Typography>

          <FormControlLabel
            control={<Switch checked={leo} onChange={handleChangeLeo} />}
          />
          <Box sx={{ display: "flex" }}>
            <Fade in={leo}>{leoV}</Fade>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ color: "#8892b0" }}>
            Clicka mig för att se Teknik coh program
          </Typography>

          <FormControlLabel
            control={
              <Switch checked={digital} onChange={handleChangeDigital} />
            }
          />
          <Box sx={{ display: "flex" }}>
            <Fade in={digital}>{digi}</Fade>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
