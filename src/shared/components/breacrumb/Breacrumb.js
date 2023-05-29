import React from 'react';
import Breacrumb from './Breacrumb.module.scss';
import { Link } from 'react-router-dom';
function Brearumb(props)
{
    const {pathtile , pathps} = props;
//   console.log(pathtile);


    return (
        <div className={Breacrumb["breacrumb"]} id={Breacrumb["breacrumb"]}>
            {pathtile && pathtile.map((item, index) =>
            {
              
                var icon = '';
                var icons ='';
                if(index==0){
                    icon = <img src="images/icon-right.svg" className={Breacrumb["icon_"]} />; 
                   
                }else if(index==2){
                    icons =<img src="images/icon-right.svg" className={Breacrumb["icon_"]} />;
                }
                
                return <div key={index} className={`${Breacrumb["item_"]} ${Breacrumb["titel-breabum"]}`}>
                    {icons}
                <Link to={pathps[index]}>{item}</Link>
                {icon}
                    
                </div>
                
                

            })}
        </div>
    )
}


export default Brearumb;