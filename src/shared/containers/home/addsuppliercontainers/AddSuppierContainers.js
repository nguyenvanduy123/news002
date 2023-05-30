import React, { useEffect, useRef, useState } from "react";
import style from "./AddSuppierContainers.module.scss";
import FormAdd from "shared/components/formadd/FromAdd";
import ItemInput from "shared/components/Iteminput/ItemInput";
import Dropdown from "shared/components/dropdown/Dropdown";
import DropdownItem from "shared/components/fromitemdropdown/FromItemDropdown";
import Dropdownadd from "shared/components/dropdownadd/DropDownAdd";
import Footer from "shared/components/footer/Footer";
import { useHistory, useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import SupplierAction from "redux/supplier/action";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Provideraction from "redux/province/action"
import Province from 'App';
import { DateSchema } from "yup";
import Status from 'App';
import Statusaction from "redux/status/action"
import District from 'App';
import Districtaction from "redux/district/action";

import Wards from 'App';
import Wardsaction from "redux/wards/action";

import SupplierAction from 'redux/supplier/action';
import Supplier from 'App';

import Cate from 'App';
import CategoryAction from 'redux/category/action'

import Code from 'App';
import CodeAction from 'redux/code/action'
function AddsupplierContainer(props) {
    let history = useHistory();
    let location = useLocation();
    ///
    const [saveid, setsaveid]=useState("");
    
    ////dữ liệu api thành phố
    const { provin } = useSelector(state => state.Province.provinceData);

    ///gét dữ liệu api tỉnh thành
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
            setOptionsprovice(provin)
            for (let v in provin) {
                if (provin[v].name == provin) {
                    setrecotdata(provin[v])
                }
            }
        }
    }, [provin])
    const [datadistrict, setdatadistrict] = useState([{ id: "", name: "Không có dữ liệu" }]);

    ///dữ lieej api quận huyện
    const { district, districtID } = useSelector(state => state.District.districtData);
    
    const [datadistrictid, setdatadistrictid] = useState(districtID)
    
    useEffect(() => {
        dispatch({
            type: Districtaction.FETCH_GET_DISTRICT,
            payload: {
                district: {}
            }
        })
    }, [])
    useEffect(() => {
        if (Array.isArray(districtID)) {
            setdatadistrict(districtID);
            for (let v in districtID) {
                if (districtID[v].name == districtID) {
                    setrecotdata(districtID[v])
                }
            }
        }

    }, [districtID])
    ////xã phường
    const [Optionsward, setOptionsward] = useState([])
    const { wardsdata } = useSelector(state => state.Wards.WardsDataaction);

    useEffect(() => {
        dispatch({
            type: Wardsaction.FETCH_GET_WARDS,
            payload: {
                wards: {}
            }
        })
    }, [])
    useEffect(() => {
        if (Array.isArray(wardsdata)) {
            setOptionsward(wardsdata);
            for (let a in wardsdata) {

                if (wardsdata[a].name == wardsdata) {
                    setrecotdata(wardsdata[a])
                }
            }
        }
    }, [wardsdata])
    ///category
    const [Optionscate, setOptionscate] = useState([])
    const { cate } = useSelector(state => state.Cate.categoryDaTa);

    useEffect(() => {
        dispatch({
            type: CategoryAction.FETCH_GET_CATE,
            payload: {
                cate: {}
            }
        })

    }, [])
    useEffect(() => {
        if (Array.isArray(cate)) {
            setOptionscate(cate);
            for (let a in cate) {

                if (cate[a].name == cate) {
                    setrecotdata(cate[a])
                }
            }
        }
    }, [cate])
    ///
    const { codeda } = useSelector(state => state.Code.codeDaTa);
    const [Optionscode, setOptionscode] = useState([])
    useEffect(() => {
        dispatch({
            type: CodeAction.FETCH_GET_CODE,
            payload: {
                code: {}
            }
        })

    }, [])
    useEffect(() => {
        if (Array.isArray(codeda)) {
            setOptionscode(codeda);
            for (let a in codeda) {

                if (codeda[a].name == codeda) {
                    setrecotdata(codeda[a])
                }
            }
        }
    }, [codeda])
    ///code

    const [recotdata, setrecotdata] = useState([]);

    let recotda = history.location.state

    const [Optionsprovice, setOptionsprovice] = useState([]);

    const [Optionstatus, setOptionstatus] = useState([]);
    const dispatch = useDispatch();
    let { id } = useParams();

    const { data } = useSelector(state => state.Supplier.supplierData)

    useEffect(() => {
        dispatch({
            type: SupplierAction.FETCH_GET_DATA_ID,
            payload: {
                data: { ...recotdata, id: id }
            }
        })
    }, [])



    useEffect(() => {

        if (recotda) {
            setrecotdata(recotda);
        }
    }, []);
    const chaneChangeText = (e, tyle = "") => {

        if (e.target) {
            let name = e.target.name;
            let value = e.target.value;
            setrecotdata({ ...recotdata, [name]: value })

        } else {
            if (tyle != "status") {
                setrecotdata({ ...recotdata, [tyle]: e.name })

                if (tyle == "provin") {

                    dispatch({
                        type: Districtaction.FETCH_GET_DISTRICT_ID,
                        payload: {
                            distr: { district, idpro: e.id ,idnew:saveid}
                        }
                    })
                    setsaveid(e.id);
                } else if (tyle == "distri") {

                    dispatch({
                        type: Wardsaction.FETCH_GET_WARDS,
                        payload: {
                            wards: e.id
                        }
                    })

                }
            } else if (tyle == "status") {
                setrecotdata({ ...recotdata, [tyle]: e.id })
            }
        }

    }
    const getstatustext = (e) => {

        if (!e) {
            return;
        }
        return (Optionstatus.filter(item => {

            return e === item.id

        }))
    }
    const setsave = (e) => {

        if (e.Name && e.cate && e.codeCN && e.distri && e.email && e.phone && e.provin && e.war) {
            if (id) {

                dispatch({
                    type: SupplierAction.FETCH_UPDATE_DATA,
                    payload: {
                        data: e
                    }
                })
            } else {
                dispatch({
                    type: SupplierAction.FETCH_ADD_DATA,
                    payload: {
                        data: e
                    }
                })
            }
            toast.success(
                "Hoàn Tác Thêm mới", {
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
            }, 5000);


        } else {


            toast.warning("Thêm mới thất bại!", {})
        }

    }



    const { handleSubmit, formState: { errors }, control } = useForm({});
    const onSubmit = (data) => {

    }
    ///api status
    const { status } = useSelector(state => state.Status.statusdata)



    useEffect(() => {
        dispatch({
            type: Statusaction.FETCH_GET_STATUS,
            payload: {
                status: {}
            }

        })
    }, [])
    useEffect(() => {

        if (Array.isArray(status)) {

            setOptionstatus(status)
            for (let a in status) {

                if (status[a].name == status) {
                    setrecotdata(status[a])
                }
            }
        }
    }, [status])
    ///
    const [valueinputsearch, setvalueseacrch] = useState("")
    const [valuesearchinput, setvaluesearchinput] = useState("")
    const onchangeseach = ((e, tyle) => {

        if (e.target) {
            let name = e.target.name;
            let value = e.target.value;
            setvalueseacrch({ ...valuesearchinput, [name]: value })
            ///danh mục
            if (tyle == "cate") {
                dispatch({
                    type: CategoryAction.FETCH_GET_CATE,
                    payload: {
                        cate: value
                    }
                })
            } else if (tyle == "provin") {
                dispatch({
                    type: Provideraction.FETCH_GET_PROVINCE,
                    payload: {
                        provin: value
                    }
                })
            } else if (tyle == "codeCN") {

                dispatch({
                    type: CodeAction.FETCH_GET_CODE,
                    payload: {
                        codealo: value
                    }
                })
            } else if (tyle == "distri") {
                dispatch({
                    type: Districtaction.FETCH_GET_DISTRICT_ID,
                    payload: {
                        distr: { district:district, search: value ,idproset:saveid }
                    }
                })
            }


        }


    })


    return <div className={style["addsupplier-containers"]}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <ToastContainer ></ToastContainer>
            <FormAdd title={<span>Thông Tin Nhà Cung Cấp</span>}>
                <div className={style["fromaddsupplier"]}>
                    <div>
                        <Controller
                            control={control}
                            rules={{ required: true, maxLength: 1 }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                                    <ItemInput
                                        title="Tên nhà cung cấp"
                                        valide="*"
                                        name="Name"
                                        id="Name"
                                        className="item-tenncc"
                                        placeholder="Nhập tên nhà cung cấp"
                                        value={recotdata ? recotdata.Name ?? '' : ''}

                                        onChange={(e) => {
                                            chaneChangeText(e, 'Name');
                                            onChange(
                                                e.target.value
                                            );
                                        }}

                                        style={{

                                            border: recotdata.Name ? "" : errors.Name
                                                ? '1px solid #FF3434'
                                                : '1px solid #ACACAC',
                                        }}
                                    />
                                );

                            }}
                            name="Name"

                        />


                        {recotdata.Name ? "" : errors.Name && (
                            <span className={style['_notedtt']}>
                                *Không được để trống
                            </span>
                        )}
                    </div>
                    <div>
                        <Controller
                            control={control}
                            rules={{ required: true, }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                                    <DropdownItem
                                        title="Danh Mục"
                                        valide="*">
                                        <div className={style[""]}>
                                            <Dropdownadd placeholder={"Danh mục"} id="cate" name="cate"
                                                Options={Optionscate}
                                                icon='images/icon-statuscenter.svg'
                                                iconclone='images/icon-close.svg'
                                                value={recotdata.cate ? recotdata.cate : ""}
                                                valuetest={valueinputsearch.cate ? valueinputsearch.cate : ""}
                                                onChange={(e) => { chaneChangeText(e, "cate"); onChange(e.value); }
                                                }
                                                change={(e) => { onchangeseach(e, 'cate') }}
                                                resetchange={(e) => { changreset(e, 'cate') }}
                                                isHover={true}
                                                style={{
                                                    border: recotdata.cate ? "" : errors.cate
                                                        ? '1px solid #FF3434'
                                                        : '1px solid #ACACAC',
                                                }}
                                            />
                                        </div>

                                    </DropdownItem>
                                );
                            }}
                            name="cate"
                        />

                        {recotdata.cate ? "" : errors.cate && (
                            <span className={style['_notedtt']}>
                                *Không được để trống
                            </span>
                        )}
                    </div>
                    <div>
                        <Controller
                            control={control}
                            rules={{ required: true, }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                                    <ItemInput
                                        title="Số điện thoại"
                                        valide="*"
                                        name="phone"
                                        className="item-tenncc"
                                        placeholder="Nhập số điện thoại"
                                        value={recotdata.phone}
                                        onChange={(e) => {
                                            chaneChangeText(e, "phone"), onChange(
                                                e.target.value
                                            )
                                        }}
                                        style={{
                                            border: recotdata.phone ? "" : errors.phone
                                                ? '1px solid #FF3434'
                                                : '1px solid #ACACAC',
                                        }}
                                    />
                                );
                            }}
                            name="phone"
                        />

                        {recotdata.phone ? "" : errors.phone && (
                            <span className={style['_notedtt']}>
                                *Không được để trống
                            </span>
                        )}
                    </div>
                </div>
                <div className={style["fromaddsupplier"]}>
                    <div>
                        <Controller
                            control={control}
                            rules={{ required: true, }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                                    <ItemInput
                                        title="Mã code"
                                        valide="*"
                                        name="code"
                                        className="item-tenncc"
                                        placeholder="code"
                                        value={recotdata.code}

                                        onChange={(e) => {
                                            chaneChangeText(e, "code"),
                                                onChange(
                                                    e.target.value,
                                                );

                                        }}
                                        style={{
                                            border: recotdata.code ? "" : errors.cate
                                                ? '1px solid #FF3434'
                                                : '1px solid #ACACAC',
                                        }}

                                    ></ItemInput>
                                );
                            }}
                            name="code"
                        />

                        {recotdata.code ? "" : errors.code && (
                            <span className={style['_notedtt']}>
                                *Không được để trống
                            </span>
                        )}
                    </div>
                    <div>
                        <Controller
                            control={control}
                            rules={{ required: true, }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                                    <DropdownItem
                                        title="Công nợ"
                                        valide="*">
                                        <div className={style[""]}>
                                            <Dropdownadd placeholder={"Nhập mã công nợ"} id="codeCN" name="codeCN"
                                                Options={Optionscode}
                                                icon='images/icon-statuscenter.svg'
                                                iconclone='images/icon-close.svg'
                                                value={recotdata.codeCN ? recotdata.codeCN : ""}
                                                valuetest={valueinputsearch.codeCN ? valueinputsearch.codeCN : ""}
                                                onChange={(e) => {
                                                    chaneChangeText(e, "codeCN"),
                                                        onChange(e.value,)
                                                }}
                                                change={(e) => { onchangeseach(e, 'codeCN') }}
                                                style={{
                                                    border: recotdata.codeCN ? "" : errors.cate
                                                        ? '1px solid #FF3434'
                                                        : '1px solid #ACACAC',
                                                }}
                                            />
                                        </div>

                                    </DropdownItem>

                                );
                            }}
                            name="codeCN"
                        />

                        {recotdata.codeCN ? "" : errors.codeCN && (
                            <span className={style['_notedtt']}>
                                *Không được để trống
                            </span>
                        )}
                    </div>
                    <div>
                        <Controller
                            control={control}
                            rules={{ required: true, }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                                    <ItemInput
                                        title="Email"
                                        valide="*"
                                        name="email"
                                        className="item-tenncc"
                                        placeholder="abc@gmail.com"
                                        value={recotdata.email}
                                        onChange={(e) => { chaneChangeText(e, "email"), onChange(e.target.value,) }}
                                        style={{
                                            border: recotdata.email ? "" : errors.email
                                                ? '1px solid #FF3434'
                                                : '1px solid #ACACAC',
                                        }}

                                    ></ItemInput>
                                );
                            }}
                            name="email"
                        />

                        {recotdata.email ? "" : errors.email && (
                            <span className={style['_notedtt']}>
                                *Không được để trống
                            </span>
                        )}
                    </div>
                </div>
                <div className={style["fromaddsupplier"]}>
                    <div style={{ width: "346px" }}>
                        <Controller
                            control={control}
                            rules={{ required: true, }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                                    <DropdownItem
                                        title="Tỉnh/ Thành phố"
                                        valide="*"
                                    >
                                        <div className={style[""]}>
                                            <Dropdownadd placeholder={"Tỉnh/ Thành phố"} id="provin" name="provin"
                                                Options={Optionsprovice}
                                                icon='images/icon-statuscenter.svg'
                                                iconclone='images/icon-close.svg'
                                                value={recotdata.provin ? recotdata.provin : ""}
                                                valuetest={valueinputsearch.provin ? valueinputsearch.provin : ""}
                                                onChange={(e) => {
                                                    chaneChangeText(e, "provin"),
                                                        onChange(e.value,)
                                                }}
                                                change={(e) => { onchangeseach(e, 'provin') }}
                                                style={{
                                                    border: recotdata.provin ? "" : errors.provin
                                                        ? '1px solid #FF3434'
                                                        : '1px solid #ACACAC',
                                                }}
                                            />
                                        </div>

                                    </DropdownItem>

                                );
                            }}
                            name="provin"
                        />

                        {recotdata.provin ? "" : errors.provin && (
                            <span className={style['_notedtt']}>
                                *Không được để trống
                            </span>
                        )}
                    </div>
                    <div >
                        <Controller
                            control={control}
                            rules={{ required: true, }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                                    <DropdownItem
                                        title="Quận/ Huyện"
                                        valide="*"
                                    >
                                        <div className={style[""]} >
                                            <Dropdownadd placeholder={"Quận/ Huyện"} id="distri" name="distri"
                                                Options={datadistrict}
                                                icon='images/icon-statuscenter.svg'
                                                iconclone='images/icon-close.svg'
                                                value={recotdata.distri ? recotdata.distri : ""}
                                                valuetest={valueinputsearch.distri ? valueinputsearch.distri : ""}
                                                onChange={(e) => { chaneChangeText(e, "distri"); onChange(e.value) }}
                                                change={(e) => { onchangeseach(e, 'distri') }}
                                                style={{
                                                    border: recotdata.distri ? "" : errors.distri
                                                        ? '1px solid #FF3434'
                                                        : '1px solid #ACACAC',
                                                }}
                                            />
                                        </div>

                                    </DropdownItem>

                                );
                            }}
                            name="distri"
                        />

                        {recotdata.distri ? "" : errors.distri && (
                            <span className={style['_notedtt']}>
                                *Không được để trống
                            </span>
                        )}
                    </div>
                    <div>
                        <Controller
                            control={control}
                            rules={{ required: true, }}
                            render={({
                                field: { onChange, onBlur, value, name, ref, },
                                fieldState: { invalid, isTouched, isDirty, error, },
                                formState, }) => {
                                return (
                                    <DropdownItem
                                        title="Phường/ Xã"
                                        valide="*"
                                    >
                                        <div className={style[""]} >
                                            <Dropdownadd placeholder={"Phường/ Xã"} id="war" name="war"
                                                Options={Optionsward}
                                                icon='images/icon-statuscenter.svg'
                                                iconclone='images/icon-close.svg'
                                                value={recotdata.war ? recotdata.war : ""}
                                                valuetest={valueinputsearch.war ? valueinputsearch.war : ""}
                                                onChange={(e) => { chaneChangeText(e, "war"); onChange(e.value); }}
                                                change={(e) => { onchangeseach(e, 'war') }}
                                                style={{
                                                    border: recotdata.war ? "" : errors.war
                                                        ? '1px solid #FF3434'
                                                        : '1px solid #ACACAC',
                                                }}
                                            />
                                        </div>

                                    </DropdownItem>

                                );
                            }}
                            name="war"
                        />

                        {recotdata.war ? "" : errors.war && (
                            <span className={style['_notedtt']}>
                                *Không được để trống
                            </span>
                        )}
                    </div>
                </div>
                <div className={style["fromaddsupplier"]}>
                    <ItemInput
                        title="Địa chỉ cụ thể"
                        name="address"
                        className="item-tenncc"
                        placeholder="Nhập địa chỉ cụ thể"
                        value={recotdata.address}
                        onChange={(e) => chaneChangeText(e, "address")}
                        errors={errors}
                    ></ItemInput>
                    <DropdownItem
                        title="Trạng thái"
                    >
                        <div className={style[""]} >
                            <Dropdownadd placeholder={"Giao Dịch"} id="status" name="status"
                                Options={Optionstatus}
                                icon='images/icon-statuscenter.svg'
                                iconclone='images/icon-close.svg'
                                value={recotdata.status ? (recotdata.status == 2 ? 'Tạm Dừng' : 'Giao dịch') : ""}

                                onChange={(e) => chaneChangeText(e, "status")}

                            >
                                <span>{getstatustext(recotdata.status) ?? "Trạng thái"}</span>
                            </Dropdownadd>
                        </div>

                    </DropdownItem>


                </div>

            </FormAdd>
            <Footer>
                <div className={style["footer-left"]}>
                    <button className={style["reset_btn"]} onClick={() => {
                        history.goBack()
                    }}>
                        <img src='images/icon-exit.svg' className='icon_ ' style={{ width: "24px", height: "24px" }} />
                        <span className='footer-left-text' >Quay lại</span></button>

                </div>
                <div className={style["footer-right"]}>

                    <button className={style["footer-right-btn-detele"]}>
                        <span className={style["footer-right-text-detele"]}> Hủy Bỏ</span>
                    </button>
                    <button className={style["footer-right-btn-update"]}
                        onClick={() => {
                            setsave(recotdata)
                        }}
                    >

                        <span className={style["footer-right-text-update"]}>Lưu</span>
                    </button>



                </div>



            </Footer>
        </form>
    </div>


}
export default AddsupplierContainer