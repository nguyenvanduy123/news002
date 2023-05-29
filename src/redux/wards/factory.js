import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';

const AppFactory = {
    fetchWardsDaTa: async (data) =>
    {
       let wards = data.payload.wards
     
        return ApiOperation.request({
            url:ApiConstants.wards+`?district_id=`+wards,
            method:'GET',
            wardsdata:data
        })
        
    },
    updateSample: (data) =>
    {
        return {
            Data: {}
        };
      
    },
}

export default AppFactory