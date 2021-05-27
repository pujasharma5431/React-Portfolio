import { Grid, Paper } from '@material-ui/core'
import React, { Component } from 'react'
import {FormControl,Input,InputLabel,FormHelperText} from '@material-ui/core'

export default class Contact extends Component {
    render() {
        return (
            <div>
            <div>
    <label htmlFor="email">email</label>
    <input type="text" name="email" id="email"/>
            </div>
            <div>
    <label htmlFor="password">password</label>
    <input type="text" name="email" id="email"/>
            </div>
            <div>
    <label htmlFor="phone">phone</label>
    <input type="text" name="email" id="email"/>
            </div>
            </div>
        )
    }
}
