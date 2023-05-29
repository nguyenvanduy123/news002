import AppAction from './action';



let initialState = {
    loadingApp: false,
    loadingAppPopup: false,
   statusdata:{
        loadingstatus: false,
        status:{},
        detailstatus:{}
    }
    
};

const AppReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case AppAction.LOADING_APP_START:
            return {
                ...state,
                loadingApp: true,
            };
        case AppAction.CLOSE_LOADING_APP:
            return {
                ...state,
                loadingApp: false,
            };
        case AppAction.LOADING_APP_POPUP_START:
            return {
                ...state,
                loadingAppPopup: true,
            };
        case AppAction.CLOSE_LOADING_APP_POPUP:
            return {
                ...state,
                loadingAppPopup: false,
            };
        case AppAction.FETCH_GET_STATUS:

            return {
                ...state,
                statusdata: {
                    ...state.statusdata,
                    loadingstatus: true,
                },
            };
        case AppAction.FETCH_GET_STATUS_SUCCESS:

            return {
                ...state,
                statusdata: {
                    ...state.statusdata,
                    status: action.payload,
                    loadingstatus: false,
                },
            };
            

        default:
            return {
                ...state,
            };
    }
};

export default AppReducer;
