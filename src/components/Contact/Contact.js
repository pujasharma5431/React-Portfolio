import React, {Component} from 'react'
import {useForm, ValidationError} from "@formspree/react";
import {
    Avatar,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    TextareaAutosize,
    TextField,
    Typography,
} from "@material-ui/core";
// import {MessageOutlined} from "@material-ui/icons";
import MessageOutlined from '@material-ui/icons/Forum';

import {makeStyles} from "@material-ui/core/styles";

export default function Contact() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(12),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "white",
      padding: "40px",
      borderRadius: "5px",
    },
    avatar: {
      margin: theme.spacing(1),
      // backgroundColor: theme.palette.secondary.main,
      backgroundColor: "#1E2228",
    },
    form: {
      // width: "100%", // Fix IE 11 issue.
      // marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
    const classes = useStyles();

    const [state, handleSubmit] = useForm("xoqydeqe");

  if (state.succeeded) {
    return (

      <Container component="main" maxWidth="xs">
          <p style={{ color: "black", textAlign: "center" ,fontSize:"19px",padding:"20px"}}>
              Thankyou for your message <br/>
              I will reply soon.

          </p>
          <CssBaseline />
          <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                  <MessageOutlined />
              </Avatar>
              <Typography component="h1" variant="h5">
                  Get in Touch
              </Typography>
              <form onSubmit={handleSubmit} className={classes.form} >
                  <Grid container spacing={2}>
                      <Grid item xs={12}>
                          <TextField
                              variant="outlined"
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                              color={"#E0E0E0"}
                          />
                          <ValidationError
                              prefix="Email"
                              field="email"
                              errors={state.errors}
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <TextareaAutosize
                              id={"message"}
                              name={"message"}
                              style={{ width: "100%" }}
                              aria-label="minimum height"
                              rowsMin={4}
                              placeholder="PLEASE ENTER YOUR MESSAGE HERE"
                          />
                          <ValidationError
                              prefix="Message"
                              field="message"
                              errors={state.errors}
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <FormControlLabel
                              control={<Checkbox value="allowExtraEmails" color="primary" />}
                              label="I have entered the valid email address."
                          />
                      </Grid>
                  </Grid>
                  <Button
                      style={{ backgroundColor: "#1E2228", color: "white" }}
                      type="submit"
                      fullWidth
                      variant="outlined"
                      color="default"
                      className={classes.submit}
                      disabled={state.submitting}
                  >
                      Submit
                  </Button>
              </form>
          </div>
      </Container>
    );
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MessageOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Get in Touch
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                color={"white"}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                id={"message"}
                name={"message"}
                style={{ width: "100%" }}
                aria-label="minimum height"
                rowsMin={4}
                placeholder="Please enter your message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I have entered the valid email address."
              />
            </Grid>
          </Grid>
          <Button
            style={{ backgroundColor: "#1E2228", color: "white" }}
            type="submit"
            fullWidth
            variant="outlined"
            color="default"
            className={classes.submit}
            disabled={state.submitting}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}