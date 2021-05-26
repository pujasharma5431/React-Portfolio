import React, { Component } from 'react'
import My from '../../assets/my.png'
import { GitHub } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';
import Myy from '../../assets/mero.png'


export default class Home extends Component {
    render() {
        return (



        <div>

    

            <div >
           
         <img src={Myy} style={{
          textAlign: 'right', alignSelf: 'flex-end'
         }}></img>

            </div>


                <div style={{
                    fontFamily:"sans-serif",
                  fontSize:"49px",
                    paddingLeft:"80px"     
                }}>
                   Hello!! Everyone 
                </div>




                   <div style={{ fontFamily:"sans-serif",
                    fontSize:"30px",
                      paddingLeft:"80px"
                     }}>
                     this is Puja Sharma enthusiastic <br/> Web Developer
                     </div>   
                     
                                    <ButtonGroup style={{
                                        paddingLeft:"99px",
                                        paddingTop:"38px"
                                    }}>
                 
                                    <div>
                                     <Button href="#" 
                                      
                                     variant="contained" style={{
                                         backgroundColor:"rgb(114,114,114)",
                                         margin:"5px"
                                         
                                     }}
                                     >About </Button>
                                     </div>
                                      <div>
  
                                     <Button href="#" 
                                      
                                     variant="contained" style={{
                                         backgroundColor:"rgb(114,114,114)",
                                         margin:"5px"
                                     }}
                                     >Projects </Button>
                                     </div>
                                     <div>
                                     <Button href="#" 
                                      
                                     variant="contained" style={{
                                         backgroundColor:"rgb(114,114,114)",
                                         margin:"5px"
                                         
                                     }}
                                     >Contact </Button>
                                     </div>
                                     
                                     </ButtonGroup>
            </div>
        )
    }
}
