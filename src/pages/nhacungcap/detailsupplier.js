import React, { useState } from "react";
import RouterPath from "router/RouterPath";
import Routes from "router/Routes";
import Detailsupplier from "shared/containers/home/detailsuppliercontainers/DetailSupplier";

import detail from './detailsupplier.module.scss'; 

function Detailsupplierr(props){
   
    
  
return<div className={detail["detailcontainer"]}>
    
    <Detailsupplier></Detailsupplier>
    
</div>
}
export default Detailsupplierr