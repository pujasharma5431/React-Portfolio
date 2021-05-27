import React from "react";
import "./Footer.css";

export default function Footer() {
    const d = new Date();
    return (
        <div className={"appbar-footer"}>
            <div style={{color: "black", textAlign: "center"}}>
                {/*<Typography style={{backgroundColor:"white",padding:"5px"}}>*/}
                {/*<span style={{ backgroundColor: "white" }}>*/}
                © {d.getFullYear()} PUJA SHARMA, ALL RIGHTS RESERVED
                {/*</span>*/}

                {/*</Typography>*/}
            </div>
        </div>
    );
}