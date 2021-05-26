import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <Grid container >
        <Grid item md={1} sm={12} xs={12}></Grid>
        <Grid style={{marginTop:"25px"}} item md={5} sm={12} xs={12}>
          <div>
            <h1 className={"heading"}>Me Talking about myself</h1>
            <div
              style={{
                border: "1px dashed black",
                boxSizing: "content-box",
                width: "72%",
              }}
            />

            <p className={"about"} style={{paddingTop:"30px",
        fontSize:"28px",
        fontFamily:"sans-serif"}}>
             
              A web designer and front end developer from Nepal who loves making things beautiful.Always on the lookout for exciting project to work on.
              good.
            </p>
          </div>
          <div className={"education"}>
            <h1 className={"heading"}>Education</h1>
            <div
              style={{
                border: "1px dashed black",
                boxSizing: "content-box",
                width: "30%",
              }}
            />
            <h5 className={"about"}>
              Bachelor in Computer Science, Tribhuvan University
            </h5>
            <h6 style={{ paddingLeft: "15px" ,
        color:"black"}}>Kathmandu, Nepal</h6>
          </div>

          <div className={"skills"}>
            <h1 className={"heading"}>Skills</h1>
            <div
              style={{
                border: "1px dashed black",
                boxSizing: "content-box",
                width: "30%",
              }}
            />
            <div className={"about"}>
              <span
                style={{
                  fontSize: "19px",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                <h5>Expertise on </h5>{" "}
              </span>
               React.js, Javascript, Adobe XD
              <br />
              <br />
              <span
                style={{
                  fontSize: "19px",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                <h5>Familiar with </h5>{" "}
              </span>
              Material UI, Bootstrap4,  HTML, CSS
            </div>
          </div>
        </Grid>
        <Grid style={{marginTop:"25px"}} item md={5} sm={12} xs={12}>

         
          </Grid>
      </Grid>
    );
  }
}