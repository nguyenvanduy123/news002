import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import factories from './factory';


function* watchProvince()
{

    yield takeEvery(actions.FETCH_GET_PROVINCE, function* (payload)
    {
        
        try {
            const response = yield call(() =>
                factories.fetchSampleProvince(payload),
            );
           
         
          yield put({
                type: actions.FETCH_GET_PROVINCE_SUCCESS,
                payload: response,
            });
          
        } catch (error) {

        } finally {
        }
    });
    
}
// function* watchSample2()
// {
   
//     yield takeEvery(actions.FETCH_SAMPLE_2, function* (payload)
//     {
//         try {
//             const response = yield call(() =>
//                 factories.updateSample(payload),
//             );
//             yield put({
//                 type: actions.FETCH_SAMPLE_2_SUCCESS,
//                 payload: response.Data,
//             });
//         } catch (error) {

//         } finally {
//         }
//     });
// }

export default function* AppProvince()
{
    yield all([
        fork(watchProvince),
        
    ]);
}
