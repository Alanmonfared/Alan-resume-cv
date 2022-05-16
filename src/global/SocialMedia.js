import React from "react";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
const actions = [
  {
    icon: <GitHubIcon />,
    name: "Github",
    href: "https://github.com/Alanmonfared",
  },
  {
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    href: "https://se.linkedin.com/in/alan-milad-monfared-b6683690",
  },
  {
    icon: <InstagramIcon />,
    name: "Instagram",
    href: "https://www.instagram.com/alanmonfared",
  },
  {
    icon: <AlternateEmailIcon />,
    name: "Email",
    href: "mailto:alan.a@live.se",
  },
];

export default function SocialMedia() {
  return (
    <>
      <Box
        sx={{
          transform: "translateZ(0px)",
          flexGrow: 1,
          "& > :not(style)": { m: 1 },
          position: "fixed",
          bottom: 50,
          left: { md: 35 },
          right: { xs: "calc(100% - 90px)", md: "auto" },
        }}
      >
        <SpeedDial
          ariaLabel="openicon"
          sx={{ color: "#64ffda" }}
          icon={
            <ConnectWithoutContactIcon
              openicon={<ConnectWithoutContactIcon />}
            />
          }
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              href={action.href}
              tooltipTitle={action.name}
              sx={{ backgroundColor: "transparent", color: "#fff" }}
            />
          ))}
        </SpeedDial>
      </Box>
    </>
  );
}
