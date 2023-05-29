import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';

const AppFactory = {
    fetchcode: async (data) =>
    {
       
        return ApiOperation.request({
            url:ApiConstants.code,
            method:"GET",
            code: data
        });
        
    },
    updateSample: (data) =>
    {
        return {
            Data: {}
        };
      
    },
}

export default AppFactory