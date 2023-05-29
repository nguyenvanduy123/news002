import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import SupplierAction from 'redux/supplier/action';
import Supplier from 'App';
import { useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import lissuppre from "./ListSupplier.module.scss"
import Table from 'shared/components/table/Table';
import ButtonDropdown from 'shared/components/buttondropdown/ButtonDropdown';
import Popover from 'shared/components/popover/Popover';
import Pagination from 'shared/components/pagination/Pagination';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import RouterPath from 'router/RouterPath';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from 'shared/components/search/Search';
import { hi } from 'date-fns/locale';
import Province from 'App';
import Provideraction from "redux/province/action"
import Status from 'App';
import Statusaction from "redux/status/action"
import { param } from 'jquery';
function Listsupplier(props) {
    let location = useLocation();
    let history = useHistory();
    const dispatch = useDispatch()

    const { data, loading, detail,search } = useSelector(state => state.Supplier.supplierData)

    let path = history.location.pathname

    const search_prams = new URLSearchParams(location.search);

    // const satimkiem = params.get('sa')
    const page = search_prams.get('page');

    const limit = search_prams.get('limit');

    const [Options, setOptions] = useState([
        {  name: "Giao dịch" ,id: 1},
        { name: "Tạm dừng" ,id: 2},

    ]);
  
    const [OptionsPagi, setOptionsPagi] = useState([]);

    const [ValueSelectLimit, setValueSelectPage] = useState({ id:20, text:20 });

    const [ValueStatus, setValueStatus] = useState();
    const [CurrentPage, setCurrentPage] = useState(page ?? 1);

    const [TotalRecord, setTotalRecord] = useState(0);
    const [isChangeData, setisChangeData] = useState(false);
    const [isChangeIndex, setisChangeIndex] = useState("");
    const [ValueSearch, setValueSearch] = useState({});
   
    ////chức năng tìm kiếm
    const [Optionstatus, setOptionstatus] = useState([]);
   
   
    const searchinput = search_prams.get('Name');

    const statusinput = search_prams.get('status');
    const addressinput = search_prams.get('provin');
    const [inputsearch, setinputsearch] = useState({})
    const [inputseachstatus, setinputseachstatus] = useState({})

    const [InputValueStatus, setInputValueStatus] = useState(Optionstatus[statusinput * 1 - 1]);

    const [InputValueAddress, setInputValueAddress] = useState(false);
    const [InputValueSearch, setInputValueSearch] = useState(false);
    const [Colums, setColums] = useState([
        {
            title: 'Mã NCC',
            dataIndex: 'codeNCC',
            style: {
                textAlign: "center"
            },
            render: (text, record) => {
                return <span style={{ color: "#0054E1",    marginTop: "3px" }}>{text}</span>
            }
        },
        {
            title: 'Tên nhà cung cấp',
            dataIndex: 'Name',
            style: {
                textAlign: "left"
            },
            render: (text, reid) => {

                // return <Link to={RouterPath["detail"].replace("/:id","/")+`${reid.id}`}>{text}</Link>
                return <span onClick={() => { history.push(RouterPath["detail"].replace("/:id", "/") + reid.id, reid) }} style={{ cursor: "pointer" }}>{text}</span>
            }

        },
        {
            title: 'Danh mục',
            dataIndex: 'cate',
            style: {
                textAlign: "left"
            }
        },
        {
            title: 'Mã code',
            dataIndex: 'code',
            style: {
                textAlign: "center"
            }
        },
        {
            title: 'Mã công nợ',
            dataIndex: 'codeCN',
            style: {
                textAlign: "left"
            },
            render: (text, record) => {
                return <span style={{ color: "#0054E1" }}>{text}</span>
            }
        },
        {
            title: 'Điện thoại',
            dataIndex: 'phone',
            style: {
                textAlign: "left"
            }
        },

        {
            title: 'Email',
            dataIndex: 'email',
            style: {
                textAlign: "left"
            }
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            style: {
                textAlign: "left"
            }
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            style: {
                textAlign: "center"
            },
            render: (text, record, index) => {
            
                return <ButtonDropdown className={`${lissuppre["_select_input"]} ${lissuppre["inputs_item"]}`} placeholder={"Trạng thái "} id="status" name="status"
                    Options={Options}
                    onChange={(e) => { onchangeStatus(e, record, index) }}
                    value={text}
                    style={{
                        backgroundColor: text === 1 ? "#008A5A" : "#F85555",
                    }}
                    icon={"images/icon-status.svg"}
                    isHover={false}
                >
                    <button className={`${lissuppre["reset_btn"]}`}>{getStatusText(text)}</button>
                </ButtonDropdown>
            }
        },
        {
            title: 'Tác vụ',
            dataIndex: '',
            style: {
                textAlign: "center"
            },
            render: (text, record, index) => {
                return <Popover
                    title={""}
                    body={
                        <div className={lissuppre['btn_action_table']} style={{ display: "flex", flexDirection: "column" }}>
                            <button className={lissuppre['btn-edit']}
                                onClick={
                                    () => {
                                        history.push(RouterPath["editncc"].replace("/:id", "/") + record.id, record)
                                    }
                                }>
                                <img src='images/icon-edit.svg' className={lissuppre['icon_']} style={{ width: "16px", height: "16px" }} />
                                <span className={lissuppre['text-success']}>Sửa</span>
                            </button>
                            <button className={lissuppre['btn-detele']}
                                onClick={() => {
                                    deleterecottable(record)

                                }}
                            >
                                <img src='images/icon-delete.svg' className={lissuppre['icon_']} style={{ width: "16px", height: "16px" }} />
                                <span className={lissuppre['text-danger']}>Xóa</span>
                            </button>
                        </div>
                    }
                    style={{
                        
                        top: "28px",
                        bottom: "0px",
                        left: "unset",
                        right: "0px",
                        width: "130px",
                        height: "auto",
                    }}
                    // isHover={true}
                    left={"-320%"}
                    top={"-30px"}
                >
                    <button className={lissuppre['btn-edit-detele']}><img src='images/iconpopeve.svg' className='icon_' style={{ width: "24px", height: "24px" }} /></button>
                </Popover>
            }
        }
    ]);

    const deleterecottable = (e) => {
        toast.info(<div className={lissuppre["title-custom-notifi"]}>
            <span className={lissuppre["tite-notifi"]}>Đang xóa nhà cung cấp</span>
            <button className={lissuppre["btn-notifi-titel"]}
                onClick={() => {
                    Undodeleterecottable(e)
                }}
            >

                <span className={lissuppre["span-btn"]}>Hoàn tác</span>
            </button>
        </div>,
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                icon: ({ theme, type }) => <img src="images/icon-xacnhan.svg" />


            })
        setTimeout(() => {

            Undodeleterecottable(e)
        }, 5000);
    }
    const Undodeleterecottable = (item) => {
        item.delete = true
        dispatch({
            type: SupplierAction.FETCH_POSTDELETE_DATA,
            payload: {
                data: item
            }
        })
        toast.success(
            "Hoàn Tác", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(() => {
            history.push("/nhacungcap/danhsachncc");

        }, 5900);
    }

    const [Data, setdata] = useState([]);
    const [DataRow, setDataRow] = useState([]);
    const [DataRowShow, setDataRowShow] = useState([]);

    useEffect(() =>
    {
        if(search_prams.size==0){
            dispatch({
                type: SupplierAction.FETCH_GET_DATA,
                payload: {
                    data: {}
                }
            })
        }
    }, [location.search])
    useEffect(() => {
        
        if (Array.isArray(data)) {
         
            setDataRow(data)
        }

    }, [data])
    useEffect(() => {
        renderOptionlimit()
    }, [DataRow])

    useEffect(() => {///pagin dữ liệu 
        const tabledata = [...DataRow]
       
        const datatableshow = tabledata.filter(item => {

            return !item.delete;
        })

        const indexOfLastData = CurrentPage * ValueSelectLimit.id;
        const indexOfFirstData = indexOfLastData - ValueSelectLimit.id;
        const currentData = datatableshow.slice(indexOfFirstData, indexOfLastData);

        setDataRowShow(currentData)
    }, [DataRow, ValueSelectLimit, CurrentPage, isChangeData, location.search])
    useEffect(() => {////pagin theo link load trang
        const searchParams = new URLSearchParams({
            'page': CurrentPage, 'limit': ValueSelectLimit.id, ...ValueSearch
        }).toString();
        history.push(path + '?' + searchParams)
    }, [location.search, CurrentPage, ValueSelectLimit.id])


    const renderOptionlimit = () => {

        setValueSelectPage(ValueSelectLimit);
        setOptionsPagi(ValueSelectLimit);
    }
    const getStatusText = (e) => {

        return (Options.filter(item => {
            return e === item.id
        }))[0].name
    }
    const onchangeStatus = (e, item, index) => {
        item.status =e
        dispatch({
            type: SupplierAction.FETCH_PUTSATUS_DATA,
            payload: {
                data:item
            }
        })

        setValueStatus(e)

    }
    const onChangeCheck = (e) => {

    }
    const onChangeSelectNumPages = (e) => {

        setValueSelectPage(e)

    }
    const OnchangePage = (e, i) => {

        setCurrentPage(i)

    }
    const OnchangePageNext = (e, i) => {
        setCurrentPage(i)



    }
    const OnchangePagePre = (e, i) => {

        setCurrentPage(i)
    }
    ///
    const [ valueinputsearch , setvalueseacrch]= useState({})
    const [ valuesearchinput , setvaluesearchinput]= useState({})
    const onchangeinput =((e)=>{
        if(e.target){
            let name = e.target.name;
            let value =e.target.value;
            setvalueseacrch({...valuesearchinput,[name]:value})
            dispatch({
                type: Provideraction.FETCH_GET_PROVINCE,
                payload: {
                    data: value
                }
            })
        }
        
    })
    ////chức năng tìm kiếm
    const onchangeSearch = ((e, tye) => {
        console.log(e.target);
        if (tye) {
            if (tye == 'status') {
                setInputValueStatus(e)
                setValueSearch({ ...ValueSearch, status: e.id ,  Name: ValueSearch.Name ?? "", provin: ValueSearch.provin ?? "" })

            } else {
                setInputValueAddress(e)
                setValueSearch({ ...ValueSearch, provin: e.name, Name: ValueSearch.Name ?? "", status: ValueSearch.status ?? "" })
            }
        } else {
            setInputValueSearch(e.target.value)
            setValueSearch({ ...ValueSearch, Name:e.target.value, status: ValueSearch.status ?? "", provin: ValueSearch.provin ?? "" })
        }

    })
    ///luu lại gia trị
    useEffect(() => {
        if (searchinput || statusinput || addressinput) {
            setValueSearch({ ...ValueSearch, Name: searchinput ?? "", status: statusinput ?? "", provin: addressinput ?? "" })

        }
    }, [searchinput, statusinput, addressinput])
    ///reset tìm kiếm
    const resetitem = (() => {
        history.push(path)
        setInputValueStatus("");
        setInputValueAddress("");
        setInputValueSearch("");
        setvalueseacrch("");
        setValueSearch({})
    })
    ///btn tìm kiếm
    const btnsearch = () => {
        setCurrentPage(1)

        const searchParamss = new URLSearchParams({
            'page': CurrentPage, 'limit': ValueSelectLimit.id, ...ValueSearch
        }).toString();
       
        history.push(path + '?' + searchParamss)
        }
    useEffect(()=>{
        let seachs = "";
        if (location.search != "") {
            seachs = ValueSearch
        }
        
        dispatch({
            type: SupplierAction.FETCH_GET_DATA,
            payload: {
                data: seachs
            }
        })
    },[location.search])
    ///gửi api lên server thành phố
    const { provin  } = useSelector(state => state.Province.provinceData);
    const [Optionsprovin , setOptionsprovin] = useState([])
    useEffect(() => {

        dispatch({
            type: Provideraction.FETCH_GET_PROVINCE,
            payload: {
                provin: {}
            }
        })
    }, [])
    useEffect(() => {
        if (Array.isArray(provin)) {
        setOptionsprovin(provin)
        }
    }, [provin])
    ////api status trạng thái
    const {status} = useSelector(state =>state.Status.statusdata)
  
    

    useEffect(()=>{
        dispatch({
            type: Statusaction.FETCH_GET_STATUS,
            payload: {
                status: {}
            }

        })
    },[])
    useEffect(() => {
        
        if (Array.isArray(status)) {
            
            setOptionstatus(status)
            
        }
    }, [status])
    const onchanresetstatus =((e,tyle)=>{
            if(tyle=="status"){
                setValueSearch({ ...ValueSearch, status: "" })
            }else{
                setValueSearch({ ...ValueSearch, provin: "" })
            }

    })
    
    return (
        <div className={lissuppre["HomeContainer"]}>
            <ToastContainer ></ToastContainer>
            <Search reacode={DataRowShow}
                onchangeSearch={onchangeSearch}
                 datastatus={Optionstatus}
                dataprovin={Optionsprovin}
                ValueStatus={InputValueStatus}
                ValueAddress={InputValueAddress}
                ValueSearch={InputValueSearch}
                valuesearch={ValueSearch}
                resetitem={resetitem}
                btnsearch={btnsearch}
                ////id
                idsa="Name"
                idstatus="status"
                idaddress="provin"
                onchangeinput={onchangeinput}
                valueinput={valueinputsearch}
                onchanresetstatus={onchanresetstatus}
               
                
              
            />
            <Table
                Colums={Colums}
                DataRow={DataRowShow}
                ischeckbox={true}
                isboder={false}
                onChangeCheck={onChangeCheck}
                WrapperStyle={{
                    // minHeight: "528px"
                }}
            />

            <Pagination style={{ marginTop: "5px" }}
                TotalRecord={DataRow.length}
                OnChangeSelectNumPages={onChangeSelectNumPages}
                ValueSelectLimit={ValueSelectLimit}
                CurrentPage={CurrentPage}
                ShowStatus={true}
                LimitButton={10}
                OnclickButtonChangePage={OnchangePage}
                ShowNextPre={true}
                OnclickButtonNext={OnchangePageNext}
                OnclickButtonPre={OnchangePagePre}

            />
        </div>
    )
}
export default Listsupplier;