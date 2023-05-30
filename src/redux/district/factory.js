import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';

const AppFactory = {
    fetchSample: async (data) => {


       

        return ApiOperation.request({
            url: ApiConstants.distrist,
            method: 'GET',
           district: data 

        });
    },
    fetchgetdataID: (data) => {
        var iddistricit = []
        
            iddistricit = data.payload.distr.district.filter((item, indexl) => {
              
                    if(data.payload.distr.search){
                    
                        let search = data.payload.distr.search!=""?item.name.toLowerCase().includes(data.payload.distr.search.toLowerCase().trim()):true
                        return search && parseInt(item.province_id) == parseInt(data.payload.distr.idproset)
                        
                    }else if(!data.payload.distr.search || data.payload.distr.search==undefined || data.payload.distr.search!=undefined){
                        if(data.payload.distr.idpro){
                            return parseInt(item.province_id) == parseInt(data.payload.distr.idpro);
                        }else{
                            return parseInt(item.province_id) == parseInt(data.payload.distr.idproset); 
                        }
                        
                              
                    }else{
                    
                        return parseInt(item.province_id) == parseInt(data.payload.distr.idpro);
                    }
                
            })
            return {
            districtID: iddistricit
        };

    },
}

export default AppFactory