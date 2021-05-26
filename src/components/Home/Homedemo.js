import React, {Component} from 'react'
import My from '../../assets/my.png'
import {GitHub} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import {ButtonGroup, Grid} from '@material-ui/core';
import Myy from '../../assets/mero.png'
import LanguageIcon from '@material-ui/icons/Language';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import Box from "@material-ui/core/Box";


export default class Home extends Component {
    render() {
        return (


            <div>

                <Grid container>

                    <Grid item xs={12} sm={6} md={5}>


                        <div style={{
                            fontFamily: "sans-serif",
                            fontSize: "39px",
                            paddingLeft: "80px",
                            paddingTop:"90px"
                        }}>
                            Hello!! Everyone
                        </div>


                        <div style={{
                            fontFamily: "sans-serif",
                            fontSize: "23px",
                            paddingLeft: "80px",
                            paddingTop:"5px"
                        }}>
                            this is Puja Sharma enthusiastic <br/> Web Developer
                        </div>

                        <ButtonGroup style={{
                            paddingLeft: "55px",
                            paddingTop: "38px"
                        }}>

                            <div>
                                <Button href="#"

                                        variant="contained" style={{
                                    backgroundColor: "rgb(114,114,114)",
                                    margin: "5px"

                                }}
                                >About </Button>
                            </div>
                            <div>

                                <Button href="#"

                                        variant="contained" style={{
                                    backgroundColor: "rgb(114,114,114)",
                                    margin: "5px"
                                }}
                                >Projects </Button>
                            </div>
                            <div>
                                <Button href="#"

                                        variant="contained" style={{
                                    backgroundColor: "rgb(114,114,114)",
                                    margin: "5px"

                                }}
                                >Contact </Button>
                            </div>
                        </ButtonGroup>

                        <ButtonGroup style={{
                            paddingLeft: "90px",
                            paddingTop: "10px",
                            color: "#718792"

                        }}>

                            <div>
                                <Button
                                    href="https://www.linkedin.com/in/puja-sharma-1aba761ab/"
                                    target="_blank"
                                    startIcon={<LinkedInIcon/>}
                                    variant="text"
                                >

                                </Button>
                            </div>
                            <div>
                                <Button
                                    href="https://twitter.com/Puja_Sharma01"
                                    target="_blank"
                                    startIcon={<TwitterIcon/>}
                                    variant="text"
                                >

                                </Button>
                            </div>
                            <div>
                                <Button
                                    href="https://github.com/pujasharma5431"
                                    target="_blank"
                                    startIcon={<GitHubIcon/>}
                                    variant="text"
                                >

                                </Button>
                            </div>
                            <div>
                                <Button
                                    href="https://www.behance.net/gallery/119209427/Business-Card?tracking_source=project_owner_other_projects"
                                    target="_blank"
                                    startIcon={<LanguageIcon/>}
                                    variant="text"
                                >

                                </Button>
                            </div>
                        </ButtonGroup>
                    </Grid>


                    <Grid item xs={12} sm={6} md={3}>

                    </Grid>


                    {/* <Box>
 <Grid item  sm={6} md={3}
 display={{xs:"none",lg:"block"}}>
        
           
           <img src={Myy} style={{
            
               backgroundColor:"#727272",
           clipPath: " circle(33.1% at 50% 50%)"
           }}></img>
  
             
              </Grid>
              </Box> */}


                    <Grid
                        // style={{backgroundColor: "#343A40"}}
                        item
                        md={4}
                        sm={12}
                        xs="none"
                    >
                        <div className={"photo"}>
                            <Box display={{xs: "none", md: "block", sm: "block"}}>
                                <img src={Myy}/>
                            </Box>
                        </div>
                    </Grid>
                    {/*<Grid item md={2} sm={6}></Grid>*/}


                </Grid>


            </div>
        )
    }
}
