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
    threshold: 400,
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

const pages = [
  { page: "Information", href: "/info_page" },
  { page: "Recycling Hub", href: "/recycling_page" },
  { page: "Events", href: "/events_page" },
];

const ResponsiveAppBar = (props) => {
  const { window } = props;
  const [anchorNav, setanchorNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setanchorNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setanchorNav(null);
  };

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 200,
  });

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      color={trigger ? "inherit" : "transparent"}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Responsive screen: size=md (desktop) */}
          <Link href="/">
            <Button color="inherit">
              <Typography
                className="text-xl"
                variant="inherit"
                noWrap
                onClick={handleOpenNavMenu}
                component="div"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Arial",
                }}
              >
                E-Cycle ♻
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
                fontFamily: "Arial",
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

          <Link href="/">
            <Typography
              variant="inherit"
              noWrap
              component="div"
              onClick={handleOpenNavMenu}
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                fontFamily: "Arial",
              }}
            >
              E-Cycle ♻
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ page, href }) => (
              <Link href={href} key={href}>
                <Button
                  key={[page]}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#323131",
                    display: "block",
                    fontFamily: "Arial",
                  }}
                >
                  {[page]}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default function NavigationBar(props) {
  return (
    <>
      <CssBaseline />
      <ResponsiveAppBar {...props} />

      <ScrollTop {...props}>
        <Fab color="inherit" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
