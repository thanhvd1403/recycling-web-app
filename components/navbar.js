import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Stack, Typography, Slide } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 500,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

function OnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

OnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const pages = [
  {
    page: "E-waste Information",
    href: "/info_page",
  },
  { page: "Recycling Hub", href: "/recycling_page" },
  { page: "Events", href: "/events_page" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorNav, setanchorNav] = useState(null);
  const [anchorUser, setanchorUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setanchorNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setanchorUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setanchorNav(null);
  };

  const handleCloseUserMenu = () => {
    setanchorUser(null);
  };

  return (
    <AppBar position="sticky" enableColorOnDark color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Responsive screen: size=md (desktop) */}
          <Link href="/">
            <Button color="inherit">
              <Typography
                className="text-xl"
                variant="h6"
                noWrap
                onClick={handleOpenNavMenu}
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                OneStop E-Cycle
              </Typography>
            </Button>
          </Link>

          {/* Responsive screen: size=xs (for Mobile) */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ page, href }) => (
                <Link href={href} key={href}>
                  <MenuItem key={[page]} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{[page]}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            OneStop E-Cycle
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ page, href }) => (
              <Link href={href} key={href}>
                <Button
                  key={[page]}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#323131", display: "block" }}
                >
                  {[page]}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Avatar and settings menu */}
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default function NavigationBar(props) {
  return (
    <>
      <CssBaseline />
      {/* <OnScroll {...props}> */}
      <ResponsiveAppBar />
      {/* </OnScroll> */}

      <ScrollTop {...props}>
        <Fab color="inherit" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Stack sx={{ width: "100%" }} spacing={2}>
        {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
      </Stack>
    </>
  );
}
