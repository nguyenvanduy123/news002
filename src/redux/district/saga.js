import { all, call, fork, put, takeEvery } from '@redux-saga/core/effects';
import actions from './action';
import factories from './factory';


function* watchDisTrictData()
{

    yield takeEvery(actions.FETCH_GET_DISTRICT, function* (payload)
    {
        
        try {
            const response = yield call(() =>
                factories.fetchSample(payload),
            );
          
            yield put({
                type: actions.FETCH_GET_DISTRICT_SUCCESS,
                payload: response,
            });
          
        } catch (error) {
            console.log(error,"abc");
        } finally {
        }
    });
    
}


export default function* AppSaga()
{
    yield all([
        fork(watchDisTrictData),
        
        // fork(watchGetData),
    ]);
}
