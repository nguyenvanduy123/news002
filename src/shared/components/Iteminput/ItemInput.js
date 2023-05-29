import React from "react";
import iteminputt from "./ItemInput.module.scss";
import { useForm } from "react-hook-form";

function ItemInput(props){
       
const { data, loading , children,id, placeholder,onChange ,title,valide,value,name ,style,errors} =props


    
       
                

return <div className={iteminputt["inputitem"]}>
                <div className={iteminputt["inputitem-stand"]}>
                        <span className={iteminputt["text-item-ncc"]}>{title}</span>
                        <span className={iteminputt["valide"]}>{valide}</span>
                </div>
                        <input className={`${iteminputt["input-item"]} ${props.className}`} id={id} 
                        name={name} placeholder={placeholder} value={value} onChange={onChange} style={style}
                      
                        />
                        
                     
                
                </div>
    
       
        
  

}
export default ItemInput