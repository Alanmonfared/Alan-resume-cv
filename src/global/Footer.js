import React from "react";
import Typography from "@mui/material/Typography";
// import Link from '@mui/material/Link';


export default function Footer(props) {
  return (
    <>
     {/* <Typography variant="body2" color="text.secondary" align="center" {...props}  sx={{
          position: "fixed",
          bottom: 20,
          left: 1000,
          right: 0,
          color: "#4f5c76",
        }} >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography> */}
      <Typography
        variant="p"
        gutterBottom
        sx={{
          position: "fixed",
          bottom: 20,
          left: 1000,
          right: 0,
          color: "#4f5c76",
        }}
      >
        Designad & utvecklad av Alan Monfared
      </Typography>
    </>
  );
}
