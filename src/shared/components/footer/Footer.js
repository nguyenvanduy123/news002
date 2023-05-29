import React from "react";
import footer from "./Footer.module.scss";

function Footer(props){
    const{ data ,loading ,children} = props;
    
return <div className={footer["footer-contennai"]}>
        {children}
    </div>
}
export default Footer