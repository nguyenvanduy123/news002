import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';

const AppFactory = {
    fetchSamplestatus: async (data) =>
    {
        
        return ApiOperation.request({
            url:ApiConstants.status,
            method: 'GET',
            status: data
           
        }) ;
        
    },
    updateSample: (data) =>
    {
        return {
            Data: {}
        };
      
    },
}

export default AppFactory