import React from "react";
import Table from "shared/components/table/Table";
import Search from "shared/components/search/Search";
import Listsupplier from "shared/containers/home/listsuppliercontainers/ListSupplier";
import suppli from "./Supplier.module.scss";
function Nhacungcap(props){
    return(
        <div className={suppli["nhacungcap"]}>
            {/* <Search/> */}
            <Listsupplier />
        </div>
    )
}
export default Nhacungcap