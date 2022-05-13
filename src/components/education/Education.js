import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useTranslation } from "react-i18next";
import {ImgBo } from "./Education.Styled";
// import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
import ButtonBases from "./ButtonBases";
import ImgList from "./ImgList";
import Level from "./Level";

// const drawerWidth = 240;

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   "& .MuiDrawer-paper": {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     boxSizing: "border-box",
//     ...(!open && {
//       overflowX: "hidden",
//       transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       width: theme.spacing(7),
//       [theme.breakpoints.up("sm")]: {
//         width: theme.spacing(9),
//       },
//     }),
//   },
// }));

const mdTheme = createTheme();

export default function Education() {
  const { t } = useTranslation();
  // const [open, setOpen] = React.useState(true);
  // const toggleDrawer = () => {
  //   setOpen(!open);
  // };

  return (
    <ThemeProvider theme={mdTheme}>
      {/* <Box sx={{ display: "flex" }}> */}
      {/* <CssBaseline /> */}

      {/* <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer> */}
      <Box
        component="main"
        sx={{
          backgroundColor: "transparent",
          flexGrow: 1,
          height: "100vh",
          // overflow: "auto",
        }}
      >
        {/* <Toolbar /> */}
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
            {/* Chart */}
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

          <Grid item xs={10} sm={12} lg={12}>
            <Box
              sx={{
                p: 10,
                // display: "flex",
                // flexDirection: "column",
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
      {/* </Box> */}
    
      <ImgBo>
        <img
          src={require("../../image/imgbin_smoke-png.png")}
          alt="logo"
        />
      </ImgBo>
    </ThemeProvider>
  );
}
