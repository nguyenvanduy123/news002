import { data } from 'jquery';
import SupplierAppAction from './action';



let initialState = {
    loadingApp: false,
    loadingAppPopup: false,
    sampleData: {
        loading: false,
        data: {}
    },
    supplierData:{
        loading:false,
        data:{},
        detail:{},
        search:{}
    }
};

const AppReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case SupplierAppAction.LOADING_APP_START:
            return {
                ...state,
                loadingApp: true,
            };
        case SupplierAppAction.CLOSE_LOADING_APP:
            return {
                ...state,
                loadingApp: false,
            };
        case SupplierAppAction.LOADING_APP_POPUP_START:
            return {
                ...state,
                loadingAppPopup: true,
            };
        case SupplierAppAction.CLOSE_LOADING_APP_POPUP:
            return {
                ...state,
                loadingAppPopup: false,
            };
        case SupplierAppAction.FETCH_SAMPLE_1:

            return {
                ...state,
                sampleData: {
                    ...state.sampleData,
                    loading: true,
                },
            };
        case SupplierAppAction.FETCH_SAMPLE_1_SUCCESS:
            return {
                ...state,
                sampleData: {
                    ...state.sampleData,
                    data: action.payload,
                    loading: false,
                },
            };
            case SupplierAppAction.FETCH_GET_DATA:///g
            //   console.log(state.supplierData.data);
                return{
                    ...state,
                        supplierData:{
                            ...state.supplierData.data,
                            loading:true,

                        }
                };
                case SupplierAppAction.FETCH_GET_DATA_SUCCESS:
                  
                    return{
                        ...state,
                        supplierData:{
                            ...state.supplierData,
                            data:action.payload,
                            loading:false,
                        }
                    };
                    case SupplierAppAction.FETCH_GET_DATA_ID:
                       
                        return{
                            ...state,
                                supplierData:{
                                    ...state.supplierData,
                                     data:action.payload.data,
                                    loading:false,
                        }
                        };
                        case SupplierAppAction.FETCH_GET_DATA_ID_SUCCESS:
                            
                            return{
                                ...state,
                                    supplierData:{
                                        ...state.supplierData,
                                        data:action.payload,
                                        loading:false,
                            }
                            };
                        case SupplierAppAction.FETCH_UPDATE_DATA:
                           
                            return{
                                ...state,
                                supplierData:{
                                    ...state.supplierData,
                                    data:state.supplierData.data,
                                    loading:false,
                                    check:0
                                }
                            };
                            case SupplierAppAction.FETCH_UPDATE_DATA_SUCCESS:
                                return{
                                    ...state,
                                    supplierData:{
                                        ...state.supplierData,
                                        data:action.payload,
                                        loading:false,
                                        check:1
                                    }
                                };
                                case SupplierAppAction.FETCH_PUTSATUS_DATA:
                                return{
                                    ...state,
                                    supplierData:{
                                        ...state.supplierData,
                                        data:state.supplierData.data,
                                        loading:false,
                                       
                                    }
                                };
                                case SupplierAppAction.FETCH_PUTSATUS_DATA_SUCCESS:
                                    return{
                                        ...state,
                                        supplierData:{
                                            ...state.supplierData,
                                            data:action.payload,
                                            loading:false,
                                           
                                        }
                                    };
                                    case SupplierAppAction.FETCH_ADD_DATA:
                                    return{
                                        ...state,
                                        supplierData:{
                                            ...state.supplierData,
                                            data:state.supplierData.data,
                                            loading:false,
                                           
                                        }
                                    };
                                    case SupplierAppAction.FETCH_ADD_DATA_SUCCESS:
                                    return{
                                        ...state,
                                        supplierData:{
                                            ...state.supplierData,
                                            data:action.payload,
                                            loading:false,
                                           
                                        }
                                    };
                                    case SupplierAppAction.FETCH_POSTDELETE_DATA:
                                    return{
                                        ...state,
                                        supplierData:{
                                            ...state.supplierData,
                                            data:state.supplierData.data,
                                            loading:false,
                                           
                                        }
                                    };
                                    case SupplierAppAction.FETCH_POSTDELETE_DATA_SUCCESS:
                                    return{
                                        ...state,
                                        supplierData:{
                                            ...state.supplierData,
                                            data:action.payload,
                                            loading:false,
                                           
                                        }
                                    };
                                    case SupplierAppAction.FETCH_GETSEARCH_DATA:
                                        return{
                                            ...state,
                                            supplierData:{
                                                ...state.supplierData,
                                                // data:state.supplierData.data,
                                                search:state.supplierData.data,
                                                loading:false,
                                               
                                            }
                                        };
                                        case SupplierAppAction.FETCH_GETSEARCH_DATA_SUCCESS:
                                        return{
                                            ...state,
                                            supplierData:{
                                                ...state.supplierData,
                                                // data:action.payload,
                                                search:action.payload,
                                                loading:false,
                                               
                                            }
                                        };
        default:
            return {
                ...state,
            };
    }
};

export default AppReducer;
