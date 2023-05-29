import React from "react";
import addfrom from "./FromAdd.module.scss";

function AddFrom(props){
    const { data , loading , children , title} = props;
return<div className={addfrom["container-addfrom"]}>
                <div className={addfrom["title-addfrom"]}>
                    {title}
                </div>
                <div className={addfrom["form-forcus-addfrom"]}>
                    {children}
                </div>
</div>

}
export default AddFrom