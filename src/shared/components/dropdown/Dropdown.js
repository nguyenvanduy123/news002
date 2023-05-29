import React, { useState, useEffect, useRef } from 'react';
import style from "./Dropdown.module.scss";
import { faIR } from 'date-fns/locale';
import { nodeName } from 'jquery';
function Dropdown(props) {

    const [Position, setPosition] = useState({ top: 0, bottom: 0, left: 0, right: 0, });
    const [isClick, setIsClick] = useState(false);

    const popRef = useRef(null)
    // const selectRef = useRef(null);

    const { Options, value, id, placeholder, onChange, isHover, icon, top,change,iconclone,onchanreset} = props;

    const [valuesearch ,setvalueseacrch]=useState({});
     const [isTitle, setIsTitle] = useState("");
    const [heightDropdown, setHeightDropdown] = useState("");
    const [isHovering, setIsHovering] = useState("");
    const [valueset,setvalue]=useState({});
 
    useEffect(() => {
        const pop = popRef.current;
        const Optionslen = Options.length;
        setHeightDropdown(Optionslen * 10);

        setPosition({ top: pop.offsetHeight, bottom: 0, left: 0, right: 0 })
    }, []);
    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, []);

    const handleOutsideClick = (event) => {
        if (popRef.current && !popRef.current.contains(event.target)) {
            setIsClick(false);
        }
      };
        const [display ,setdisplay] = useState("none");
      useEffect(()=>{
       
        if(value!=undefined && value!="undefined"){
           
            setIsClick(true);
            setdisplay("block")
        }else{
            setdisplay("none")
            setIsClick(false);
        }
       
        if(value<0){
            setdisplay("block")
            setIsClick(true); 
        }
        if(value){
            setIsClick(false);
        }
       
        setvalue(value)

      },[value,display])
     
      
     
    return (
        <div 
            className={` ${style["Dropdown"]}  ${props.className ?? ""}`}
            id={style["dropdown"]}
            onClick={() => { setIsClick(!isClick) }}
            ref={popRef}  style={{ ...props?.style ?? "" }}
        >
            <div className={`${style["inputs_item"]}`}   >
               
                <div className={` ${style["icon_float"]} ${isClick ? style["is_change"] : ""}`}>
                    
                    <img style={{ marginLeft: "2px" }} src={icon} className={style['icon_drop']} />
                </div>
                <div className={style["icon_clone"]} style={{display:display}} onClick={(e)=>{onchanreset(e)}}>
                    <img style={{ marginLeft: "3px" ,width:"12px"}} src={iconclone} className={style['icon_drop']} />
                </div>
                <input className={`${style["input_item"]}`} id={id ?? ""} name={props.name ?? ""} placeholder={placeholder ?? ""}
                    value={valueset ?? ""}
                    autoComplete={("off").toString()} onChange={(e) => {change(e) }} />
            </div>
            <div className={` ${style["dropdown_body"]} ${style["stand_radius"]} ${props.classNameBody ?? ""} ${isClick ? style["show"] : style[""]}`}
                style={{

                    top: !top ? Position.top : top,

                }} ref={popRef} >
                <div className={style["dropdown_body_stand"]} >
                    <ul className={style["dropdown_body_stand_stand_input"]}>
                        {Options && Options.map((item, index) => {

                            return <li className={style["stand_input_li"]} key={index} onClick={() => { setIsTitle(item); onChange(item) }} >{item.name}</li>
                        })}


                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Dropdown;