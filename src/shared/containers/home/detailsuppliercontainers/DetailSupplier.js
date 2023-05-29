import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import FormDetail from "shared/components/formdetail/FormDetail";
import Footer from "shared/components/footer/Footer";
import detailscss from "./DetailSupplier.module.scss";
import RouterPath from "router/RouterPath";
import Search from "shared/components/search/Search";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import SupplierAction from 'redux/supplier/action';
import Supplier from 'App';
function Detailsupplier(props){
    let location = useLocation();
    let history = useHistory();
    let { id } = useParams();
    
    const dispatch = useDispatch()
   const {data,loading } =useSelector(state => state.Supplier.supplierData)

    let ncc = history.location.state
 
    const [isChangeData, setisChangeData] = useState(false);
    const [showdetail,setshowdetail] = useState([]);
    const [record, setRecord] = useState([]);
    useEffect(()=>{
        if(data){
            setRecord(data);
            setshowdetail([
                {lable:"Tên nhà cung cấp ",text:data.Name},
                {lable:"Trạng thái ",text:data.status == 2 ? <span style={{ color: "rgba(255, 52, 52, 1)" }}>Tạm dừng</span> : <span style={{ color: "#138300" }}>Giao dịch</span> },
                {lable:"Danh mục ",text:data.cate},
                {lable:"Tỉnh/ Thành phố ",text:data.provin},
                {lable:"Điện thoại ",text:data.phone},
                {lable:"Quận/Huyện ",text:data.distri},
                {lable:"Email ",text:data.email},
                {lable:"Phường/Xã ",text:data.war},
                {lable:"Công nợ ",text:data.codeCN},
                {lable:"Địa chỉ cụ thể ",text:data.address},
                {lable:"Mã code ",text:data.code},
            ])
            setisChangeData(false)

        }
        
    },[data])
    
    useEffect(()=>{
        if(ncc){
            setRecord(ncc);
            setshowdetail([
                {lable:"Tên nhà cung cấp ",text:ncc.Name},
                {lable:"Trạng thái ",text:ncc.status == 2 ? <span style={{ color: "rgba(255, 52, 52, 1)" }}>Tạm dừng</span> : <span style={{ color: "#138300" }}>Giao dịch</span> },
                {lable:"Danh mục ",text:ncc.cate},
                {lable:"Tỉnh/ Thành phố ",text:ncc.provin},
                {lable:"Điện thoại ",text:ncc.phone},
                {lable:"Quận/Huyện ",text:ncc.distri},
                {lable:"Email ",text:ncc.email},
                {lable:"Phường/Xã ",text:ncc.war},
                {lable:"Công nợ ",text:ncc.codeCN},
                {lable:"Địa chỉ cụ thể ",text:ncc.address},
                {lable:"Mã code ",text:ncc.code},
            ])
            setisChangeData(false)

        }
    },[ncc])
    const reset = ()=>{
        setshowdetail([]);
        setRecord([]);
    }
    const [showbt,setShowbt] = useState(false)
    const Deleterecode = (idrecod)=>{
       
      toast.info(<div className={detailscss["title-custom-notifi"]}>
            <span className={detailscss["tite-notifi"]}>Đang xóa nhà cung cấp</span>
            <button className={detailscss["btn-notifi-titel"]}
            onClick={()=>
            {
                UndoDeleterecode(idrecod)
            }}
            >
                
                <span className={detailscss["span-btn"]}>Hoàn tác</span>
            </button>
        </div>,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick:true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            icon: ({theme, type}) =>  <img src="images/icon-xacnhan.svg"/>
            
            
        })
     setTimeout(() => {
        // history.push("/nhacungcap");
        UndoDeleterecode(idrecod)
     }, 5900);   

    }
    const UndoDeleterecode = (itemrecod) =>
    {
        itemrecod.delete = true
        dispatch({
            type: SupplierAction.FETCH_PUTDELETE_DATA,
            payload: {
                data: itemrecod
            }
        })
        toast.success(
            "Hoàn Tác",{position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick:true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",});
            setTimeout(() => {
                 history.push("/nhacungcap/danhsachncc");
               
             }, 5000);   
    }
    const titel_chitiet = 1;
    ////set trạng thái
    const onchangeStatus = (e) =>
    {
      
        dispatch({
            type: SupplierAction.FETCH_GET_DATA_ID,
            payload: {
                data: { ...record, status: e }
            }
        })
        // setisChangeData(true);
    }
    
    return<div className={`${detailscss["FormDetail-content-container"]}`}>
        <ToastContainer ></ToastContainer>
        <Search titel_chitiet={titel_chitiet} 
        onchangeStatus={onchangeStatus}/>
            <FormDetail 
                title="Thông tin nhà cung cấp"
                data={showdetail}
                
            ></FormDetail>
            <Footer>
                <div className={detailscss["footer-left"]}>
                    <button className={detailscss["reset_btn"]} onClick={() =>
                    {
                        history.goBack()
                    }}>
                <img src='images/icon-exit.svg' className='icon_ ' style={{ width: "24px", height: "24px" }} />
                <span className='footer-left-text' >Quay lại</span></button>

                </div>
                <div className={detailscss["footer-right"]}> 
                    
                        <button className={detailscss["footer-right-btn-detele"]}
                        onClick={
                            ()=>{
                                Deleterecode(ncc);
                            }
                        
                        }
                        > 
                        
                            <span className={detailscss["footer-right-text-detele"]}> Xóa</span>
                        </button>
                        <button className={detailscss["footer-right-btn-update"]}
                        onClick={()=>{history.push(RouterPath["editncc"].replace("/:id","/")+ncc.id,ncc)}}> 
                        <span className={detailscss["footer-right-text-update"]}>Sửa</span>
                        </button>
                    

                </div>



            </Footer>
        

    </div>
}
export default Detailsupplier