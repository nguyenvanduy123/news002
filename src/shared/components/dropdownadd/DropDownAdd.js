import React, { useState, useEffect, useRef } from 'react';
import style from "./DropDownAdd.module.scss";
function DropDownAdd(props) {

    

    const { Options, value, id, placeholder, onChange, isHover, icon, top ,iconclone,change,valuetest} = props;
   
    
    const [Position, setPosition] = useState({ top: 0, bottom: 0, left: 0, right: 0, });
    const [isClick, setIsClick] = useState(false);
    const popRef = useRef()
    const refpop = useRef(null)
    const timeoutRef = useRef(null);


    const [isTitle, setIsTitle] = useState("");
    const [heightDropdown, setHeightDropdown] = useState("");
    const [isHovering, setIsHovering] = useState(false);
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
      useEffect(()=>{
      
       if(valuetest!=undefined && valuetest!="" ){
        setIsClick(true);
       }
       },[valuetest])
       const handefocus=()=>{
            refpop.current.focus();
            
       
       }
       const [valuetestres,setvaluetestres] =useState("")
       
       useEffect(()=>{
            if(valuetest){
               
                setvaluetestres(valuetest);
            }
       },[valuetest])
       const resetchange =(()=>{
       
            setvaluetestres("");
            refpop.current.value=""
    })
       
       
       
    return (
        <div
            className={` ${style["Dropdown"]}  ${props.className ?? ""}`}
            id={style["dropdown"]}
            style={{ ...props?.style ?? "" }}
            onClick={() => { setIsClick(!isClick) }}
            ref={popRef}

        >
            <div className={`${style["inputs_item"]}`} onClick={()=>{handefocus()}}>
                <div className={` ${style["icon_float"]} ${isClick ? style["is_change"] : ""}`}>
                    <img style={{ marginLeft: "2px" }} src={icon} className={style['icon_drop']} />

                </div>
                <div className={style["icon_clone"]}  onClick={(e)=>{onchanreset(e)}}>
                    <img style={{ marginLeft: "3px" ,width:"12px"}} src={iconclone} className={style['icon_drop']} />
                </div>
                <div className={style["value-input"]}>{valuetestres?"":value }</div>
                <input className={`${style["input_item"]}`} id={id ?? ""} name={props.name ?? ""} placeholder={value ? "":placeholder}
                     onChange={(e) => {change(e) }} ref={refpop}/>
            </div>
            <div className={` ${style["dropdown_body"]} ${style["stand_radius"]} ${props.classNameBody ?? ""} ${isClick ? style["show"] : ""}`}
                style={{

                    top: !top ? Position.top : top,

                }}>
                <div className={style["dropdown_body_stand"]}>
                    <ul className={style["dropdown_body_stand_stand_input"]}>
                        {Options && Options.map((item, index) => {

                            return <li className={style["stand_input_li"]} key={index} onClick={() => { setIsTitle(item); onChange(item) ;resetchange()}} >{item.name}</li>
                        })}


                    </ul>
                </div>
            </div>
        </div>
    )
}


export default DropDownAdd;