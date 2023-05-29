/**
 * ****************************************************************************
 * @description     :   Combinie all reducers on app
 * @created at      :   2020/12/03
 * @created by      :   QuyPN - quy.pham@toploop.co
 * @package         :   dashlite-admin-react
 * @copyright       :   Copyright (c) TOPLOOP
 * @version         :   1.0.0
 * ****************************************************************************
 */

/**
 * import libraries
 */
import { combineReducers } from 'redux';
import AppReducer from './app/reducer';
import SupplierReducer from './supplier/reducer'
import ProvinceReducer from './province/reducer'
import StatusReducer from './status/reducer'
import DistrictReducer from './district/reducer'
import WardsReducer from './wards/reducer'
import CateReducer from './category/reducer'
import CodeReducer from './code/reducer'
/**
 * Combinie all reducers on app
 * -----------------------------------------
 * @author : QuyPN - 2020/12/03 - create
 * @access : public
 */
const rootReducer = combineReducers({
    App: AppReducer,
    Supplier: SupplierReducer,
    Province: ProvinceReducer,
    Status:StatusReducer,
    District:DistrictReducer,
    Wards:WardsReducer,
    Cate:CateReducer,
    Code:CodeReducer


});

export default rootReducer;
