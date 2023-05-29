import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';

const AppFactory = {
    fetchSample: async (data) =>
    {
    
        
       let disti = data.payload.data
       
        return ApiOperation.request({
            url:ApiConstants.distrist+`?province_id=`+disti,
            method: 'GET',
            district: data
           
        });
        // return
        
    },
    updateSample: (data) =>
    {
        return {
            Data: {}
        };
      
    },
}

export default AppFactory