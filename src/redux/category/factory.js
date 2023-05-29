import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';

const AppFactory = {
    fetchgetcategory: async (data) =>
    {
       
        return ApiOperation.request({
            url:ApiConstants.category,
            method:'GET',
            cate: data
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