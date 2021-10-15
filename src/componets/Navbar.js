import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  TextField,
} from "@material-ui/core";
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
                justifyContent: "space-between",
                marginTop: "5px",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "5px",
                  marginRight: "34px",
                }}
              >
                <Box component="div">
                  <img src={logo2} height={70} width={90} />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "5px",
                  }}
                >
                  <Typography
                    style={{
                      color: "#0a1c7f",
                      textShadow: "0.3px 0.3px",
                      fontSize: "14px",
                    }}
                  >
                    Anirak
                  </Typography>
                  <Typography
                    style={{
                      color: "#0a1c7f",
                      textShadow: "0.3px 0.3px",
                      fontSize: "14px",
                    }}
                  >
                    Consignment
                  </Typography>
                  <Typography
                    style={{
                      color: "#0a1c7f",
                      textShadow: "0.3px 0.3px",
                      fontSize: "14px",
                    }}
                  >
                    Furniture
                  </Typography>
                </Box>
              </Box>
              <Box
                style={{
                  width: 320,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    color: "#0a1c7f",
                    fontSize: "16px",
                    // background: "white",
                    height: "78px",
                    // width: "100px",
                  }}
                >
                  Shop
                </Button>
                <Button
                  style={{
                    color: "#0a1c7f",
                    fontSize: "16px",
                    // background: "white",
                    height: "78px",
                    // width: "100px",
                  }}
                >
                  Sell
                </Button>
                <Button
                  style={{
                    color: "#0a1c7f",
                    fontSize: "16px",
                    // background: "white",
                    height: "78px",
                    // width: "100px",
                  }}
                >
                  How it works
                </Button>
              </Box>
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
