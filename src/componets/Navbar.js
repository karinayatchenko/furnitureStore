import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@material-ui/core";
import logo2 from "../logo2.png";
import cartIcon from "../cartIcon.png";
import SearchBar from "material-ui-search-bar";

export const Navbar = () => {
  return (
    <Box>
      <Box component="nav">
        <AppBar position="static">
          <Toolbar
            style={{
              background: "#e7eff1",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: "5px",
              }}
            >
              <Box component="div">
                <img src={logo2} height={80} width={100} />
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "5px",
                }}
              >
                <Typography
                  varirant="h1"
                  style={{ color: "#0a1c7f", textShadow: "0.3px 0.3px" }}
                >
                  Anirak
                </Typography>
                <Typography
                  varirant="h1"
                  style={{ color: "#0a1c7f", textShadow: "0.3px 0.3px" }}
                >
                  Consignment
                </Typography>
                <Typography
                  varirant="h1"
                  style={{ color: "#0a1c7f", textShadow: "0.3px 0.3px" }}
                >
                  Furniture
                </Typography>
              </Box>
            </Box>
            <Box
              style={{
                width: 300,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                style={{
                  color: "#0a1c7f",
                  fontSize: "20px",
                  background: "white",
                  height: "50px",
                  width: "100px",
                }}
              >
                Shop
              </Button>
              <Button
                style={{
                  color: "#0a1c7f",
                  fontSize: "20px",
                  background: "white",
                  height: "50px",
                  width: "100px",
                }}
              >
                Sell
              </Button>
            </Box>
            <Box style={{ display: "flex", justifyContent: "flex-end" }}>
              <SearchBar
                placeholder="Search by item"
                style={{
                  width: 350,
                  marginRight: "20px",
                }}
              />

              <Box component="div" style={{ marginTop: "7px" }}>
                <img src={cartIcon} height={30} width={30} />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Navbar;
