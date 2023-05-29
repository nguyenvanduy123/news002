import React, { useEffect } from 'react';
import Brearumb from '../breacrumb/Breacrumb';
import Popover from '../popover/Popover';

import topbar from "./Topbar.module.scss";
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import RouterPath from 'router/RouterPath';

function Topbar(props) {
    let history = useHistory();
    let location = useLocation();
    const { title_topbar } = props;

    const past = location.pathname ? location.pathname.split("/") : [];
    
    const pasts = past.filter(function (eleme) {
        return eleme !== "";

    });
    let pathtile = [past[1] == 'nhacungcap' ? "Nhà Cung Cấp" : ""];


    let pathps = [];
    let path_s = "";

    pasts.map((item, indel) => {
        path_s += "/" + item
        pathps.push(path_s)
        if (indel == (pasts.length - 1)) {
            return
        }
        if (title_topbar[path_s]) {
            pathtile.push(title_topbar[path_s])
        }

    });

    pathtile.push(title_topbar[location.pathname]);



    return (
        <div className={topbar["Topbar"]} id={topbar['topbar']}>
            <div className={topbar['left']}>
                <Popover
                    title={""}
                    body={
                        <div className={topbar['pop_btn_addnew']}>
                            <button onClick={() => { history.push(RouterPath["addncc"]) }} className={topbar['reset_btn-addnewncc']}>Tạo nhà cung cấp</button>
                        </div>
                    }
                    style={{
                        width: "190px",
                        height: "60px",
                    }}
                    isHover={false}
                >
                    <button className={topbar['reset_btn-addnew']}>  <img src='images/icon-themmoi.svg' className={topbar['icon_logo']} /></button>
                </Popover>

                <h4 className={topbar['title_text']}>Bán hàng</h4>
                <div className={topbar['line_v']}></div>
                <Brearumb pathps={pathps} pathtile={pathtile} className={"title2_text"} />
            </div>
            <div className={topbar['right']}>
                <div className={topbar['menu_top_right']}>
                    <div className={topbar['menu_top_right_item']}>
                        <img src='images/icon-menu1.svg' className={topbar['icon_']} />
                        <div className={topbar['div-span-subsystem']}>
                            <span className={topbar['span-subsystem']}>Phân Hệ</span>
                            <div className={topbar['shell-span-subsystem']}>
                                <div className={topbar['shell-span-subsystem-1']}></div>
                            </div>
                        </div>


                    </div>
                    <div className={topbar['menu_top_right_item']}>
                        <img src='images/icon-menu2.svg' className={topbar['icon_']} />
                        <div className={topbar['div-span-subsystem']}>
                            <span className={topbar['span-overview']}>Tổng Quan</span>
                            <div className={topbar['shell-span-overview']}>
                                <div className={topbar['shell-span-overview-1']}></div>
                            </div>
                        </div>
                    </div>
                    <div className={topbar['menu_top_right_item']}> 
                    <img src='images/icon-menu3.svg' className={topbar['icon_']} />
                    </div>
                    <div className={topbar['menu_top_right_item']}> 
                    <img src='images/icon-menu4.svg' className={topbar['icon_']} />
                        <span className={topbar['note']}>12</span>
                    </div>
                    <div className={topbar['menu_top_right_item']}> 
                    <img src='images/icon-menu5.svg' className={topbar['icon_']} />
                    </div>

                </div>
                <div className={topbar['btn_user']}>
                    <div className={topbar['menu_top_right_item-user']}>
                        <img src='images/icon-user-top.svg' className={topbar['icon_user']} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Topbar;