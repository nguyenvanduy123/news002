/**
 * ****************************************************************************
 * @description     :   Export all midleware function of saga
 * @created at      :   2020/12/03
 * @created by      :   QuyPN - quy.pham@toploop.co
 * @package         :   dashlite-admin-react
 * @copyright       :   Copyright (c) TOPLOOP
 * @version         :   1.0.0
 * ****************************************************************************
 */

/**
 * imprt libraries
 */
import { all } from 'redux-saga/effects'

/**
 * impoprt saga of other components
 */
import AppSaga from './app/saga'
import AppSupplier from './supplier/saga'
import AppProvince from './province/saga'
import AppStatus from './status/saga'
import AppDistrict from './district/saga'
import AppWards from './wards/saga'
import AppCate from './category/saga'
import AppCode from './code/saga'
export default function* rootSaga () {
    yield all([
        AppSaga(),
        AppSupplier(),
        AppProvince(),
        AppStatus(),
        AppDistrict(),
        AppWards(),
        AppCate(),
        AppCode()
        
    ])
}
