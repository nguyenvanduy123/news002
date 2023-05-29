import AppAction from './action';



let initialState = {
    loadingApp: false,
    loadingAppPopup: false,
    districtData: {
        loading: false,
        district: {}
        
    },
    
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
        case AppAction.FETCH_GET_DISTRICT:

            return {
                ...state,
                districtData: {
                    ...state.districtData,
                    loading: true,
                },
            };
        case AppAction.FETCH_GET_DISTRICT_SUCCESS:

            return {
                ...state,
                districtData: {
                    ...state.districtData,
                    district: action.payload,
                    loading: false,
                },
            };
           

        default:
            return {
                ...state,
            };
    }
};

export default AppReducer;
