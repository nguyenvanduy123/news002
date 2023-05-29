import ProvinceAction from './action';



let initialState = {
    loadingApp: false,
    loadingAppPopup: false,
    
    provinceData:{
        loading: false,
        provin:{},
        detail:{}
    }
   
};

const ProvinceReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case ProvinceAction.LOADING_APP_START:
            return {
                ...state,
                loadingApp: true,
            };
        case ProvinceAction.CLOSE_LOADING_APP:
            return {
                ...state,
                loadingApp: false,
            };
        case ProvinceAction.LOADING_APP_POPUP_START:
            return {
                ...state,
                loadingAppPopup: true,
            };
        case ProvinceAction.CLOSE_LOADING_APP_POPUP:
            return {
                ...state,
                loadingAppPopup: false,
            };
       
            case ProvinceAction.FETCH_GET_PROVINCE:
                
                return{
                    ...state,
                        provinceData:{
                            ...state.provinceData,
                            loading:true,
                        }
                };
                case ProvinceAction.FETCH_GET_PROVINCE_SUCCESS:
                   
                var inputsearch = action.payload
                    if(provin.value){
                        inputsearch = action.payload.filter((item,index)=>{
                            let searchinput = provin.value!=""?item.name.toLowerCase().includes(provin.value.toLowerCase().trim()):true
                            return searchinput
                        })
                    }
                    return{
                        ...state,
                        provinceData:{
                            ...state.provinceData,
                            provin:inputsearch,
                            loading:false,
                        }
                    };
                    
                    


        default:
            return {
                ...state,
            };
    }
};

export default ProvinceReducer;
