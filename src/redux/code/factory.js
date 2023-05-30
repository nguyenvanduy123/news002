import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';

const AppFactory = {
    fetchcodegetdata: async (data) =>
    {
       
        return ApiOperation.request({
            url:ApiConstants.code,
            method:"GET",
            code: data
        });
        
    },
    
}

export default AppFactory