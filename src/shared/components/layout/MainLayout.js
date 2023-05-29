import React from 'react';
import style from './mainlayout.module.scss';
function MainLayout(props)
{
    
    return (
        <div className={style["MainLayout"]}>
            {props.children}
        </div>
    )
}
export default MainLayout;