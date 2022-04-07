import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import { useRouter } from "next/router";

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
  // Open and close app bar on mobile devices
  const [anchorNav, setanchorNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setanchorNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setanchorNav(null);
  };

  // Scrool trigger for transparent app bar on top.
  const { window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 200,
  });

  // router and style config for current active route.
  const router = useRouter();
  const styleFocus = {
    fontWeight: "bold",
    color: "#348FF5",
  };

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
          <Link href="/" passHref>
            <Button
              color="inherit"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Typography
                className="text-xl"
                variant="inherit"
                noWrap
                component="div"
                sx={{
                  mr: 1,
                  fontFamily: "Arial",
                  ...{ ...(router.asPath === "/" ? styleFocus : null) },
                }}
              >
                E-Cycle ♻
              </Typography>
            </Button>
          </Link>

          {/* Responsive screen: size=xs (for Mobile) */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              left: -15,
            }}
          >
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
              <Link href={"/"} key={`/_Link`} passHref>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{
                      fontFamily: "Arial",
                      ...{
                        ...(router.asPath === "/" ? styleFocus : null),
                      },
                    }}
                  >
                    E-Cycle ♻
                  </Typography>
                </MenuItem>
              </Link>
              {pages.map(({ page, href }) => (
                <Link href={href} key={`${href}_Link`} passHref>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      sx={{
                        fontFamily: "Arial",
                        ...{
                          ...(router.asPath === href ? styleFocus : null),
                        },
                      }}
                    >
                      {[page]}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Link href="/" passHref>
            <Typography
              variant="inherit"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                fontFamily: "Arial",
                ...{
                  ...(router.asPath === "/" ? styleFocus : null),
                },
              }}
            >
              E-Cycle ♻
            </Typography>
          </Link>

          {/* Responsive screen: size=md (for Desktop) */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ page, href }) => {
              return (
                <Link href={href} key={`${href}_Desktop_Link`} passHref>
                  <Button
                    key={[page]}
                    color="inherit"
                    sx={{
                      my: 2,
                      display: "block",
                      fontFamily: "Arial",
                      ...{
                        ...(router.asPath == href ? styleFocus : null),
                      },
                    }}
                  >
                    {[page]}
                  </Button>
                </Link>
              );
            })}
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
