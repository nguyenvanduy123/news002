import AppAction from './action';



let initialState = {
    loadingApp: false,
    loadingAppPopup: false,
    categoryDaTa: {
        loading: false,
        cate: {}
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
        
            case AppAction.FETCH_GET_CATE:
                return{
                    ...state,
                    categoryDaTa:{
                            ...state.categoryDaTa,
                            loading:true,
                        }
                };
                case AppAction.FETCH_GET_CATE_SUCCESS:
                var categorysearch = []
                if(cate.value){
                    categorysearch = action.payload.filter((item,indexl)=>{
                        let searchinputcate = cate.value!=""?item.name.toLowerCase().includes(cate.value.toLowerCase().trim()):true
                            return searchinputcate

                    })
                }else{
                    categorysearch = action.payload
                }
                    return{
                        ...state,
                        categoryDaTa:{
                            ...state.categoryDaTa,
                            cate:categorysearch,
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
