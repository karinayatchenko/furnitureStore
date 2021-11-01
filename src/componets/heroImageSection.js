import React from "react";
import hero from "../hero.png";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

export const Hero = (props) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const style = {
    position: "fixed",
    top: 80,
    left: 0,

    "min-width": "100%",
    "min-height": "90%",
  };

  return (
    <div style={style}>
      <img src={hero} style={style} />
      <Box
        style={{
          width: 880,
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          top: "30%",
          left: "30%",
        }}
      >
        <Link to="/furniturecollection" style={{ textDecoration: "none" }}>
          <Button
            style={{
              color: "#0a1c7f",
              fontSize: "18px",
              background: "#d49393",
              height: "50px",
              width: "130px",
              borderColor: "#0a1c7f",
              borderWidth: "0.5px",
              borderStyle: "solid",
            }}
          >
            Shop
          </Button>
        </Link>
        <Link to="/sellfurniture" style={{ textDecoration: "none" }}>
          <Button
            style={{
              color: "#0a1c7f",
              fontSize: "18px",
              background: "#e7eff1",
              height: "50px",
              width: "130px",
              borderColor: "#0a1c7f",
              borderWidth: "0.5px",
              borderStyle: "solid",
            }}
          >
            Sell
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default Hero;
